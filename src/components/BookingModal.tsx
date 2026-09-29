import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Calendar as CalendarIcon,
  ArrowLeft,
  Video,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";

const CALENDAR_ID = "7aYAjxAsTUEMCpcnzmTg";
const LOCATION_ID = "hshXh4CwDZppYoxoTSVo";
const VIBE_API_URL = "https://backend.leadconnectorhq.com/vibe-ai";

export function BookingModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string | null>(null);

  const [availableSlots, setAvailableSlots] = useState<
    Record<string, { slots: string[] }>
  >({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://client.paulwoodley.com/js/external-tracking.js";
    script.setAttribute(
      "data-tracking-id",
      "tk_329cd5260fad40de8037e39108281e00",
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        const now = new Date();
        const start = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth(),
          1,
        );
        const startDate = start < now ? now : start;

        const end = new Date(startDate);
        end.setDate(end.getDate() + 30);

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const res = await fetch(
          `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots?startDate=${startDate.getTime()}&endDate=${end.getTime()}&timezone=${timezone}`,
        );
        if (res.ok) {
          const data = await res.json();
          setAvailableSlots(data);
        }
      } catch (error) {
        console.error("Failed to fetch slots", error);
      } finally {
        setLoadingSlots(false);
      }
    };

    if (open) {
      fetchSlots();
    }
  }, [currentMonth, open]);

  const dateKey = date ? format(date, "yyyy-MM-dd") : null;
  const slotsForDate =
    dateKey && availableSlots[dateKey] ? availableSlots[dateKey].slots : [];

  const displaySlots = slotsForDate.map((isoString) => ({
    iso: isoString,
    display: format(new Date(isoString), "hh:mm a"),
  }));

  const handleNext = () => {
    if (date && slot) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${VIBE_API_URL}/booking/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locationId: LOCATION_ID,
          calendarId: CALENDAR_ID,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
          selectedSlot: slot,
          selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          sessionId: crypto.randomUUID(),
        }),
      });

      if (response.ok) {
        setStep(3);

        // CRM Form Tracking
        const tags = [
          "tcpa-method",
          "timestamp",
          "strategy-session-booking",
          "gdpr-compliant",
          "pwc-data-consent-yes",
        ];

        if (emailConsent) tags.push("pwc-email-consent-yes");
        else tags.push("pwc-email-consent-no", "do-not-email");

        if (smsConsent)
          tags.push(
            "pwc-sms-consent-yes",
            "pwc-tcpa-sms-compliant",
            "consent: sms-yes",
          );
        else tags.push("pwc-sms-consent-no", "consent: sms-none", "do-not-sms");

        const trackingPayload = {
          type: "external_form_submission",
          timestamp: Date.now(),
          formId: "Strategy Session Booking Form",
          tags: tags,
          formData: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            "contact.leadership_challenge": formData.notes,
          },
          formLabels: {
            first_name: "First Name",
            last_name: "Last Name",
            email: "Email",
            phone: "Phone Number",
            "contact.leadership_challenge": "Leadership Challenge",
          },
          url: window.location.href,
          title: document.title,
          path: window.location.pathname,
          userAgent: navigator.userAgent,
          trackingId: "tk_329cd5260fad40de8037e39108281e00",
          locationId: "hshXh4CwDZppYoxoTSVo",
          sessionId: crypto.randomUUID(),
          properties: {
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
              ? "mobile"
              : "desktop",
          },
        };

        fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            version: "2021-07-28",
          },
          body: JSON.stringify(trackingPayload),
        }).catch(() => {});
      } else {
        throw new Error("Failed to book appointment");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error booking your appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setDate(undefined);
    setSlot(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) setTimeout(reset, 300);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 bg-background sm:rounded-2xl">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/3 bg-muted/30 p-8 border-r border-border flex flex-col">
            <div className="mb-8">
              <h2 className="text-xl font-bold uppercase text-primary mb-2">
                Paul Woodley
              </h2>
              <h1 className="text-2xl font-extrabold text-foreground">
                Strategy Session
              </h1>
            </div>
            <div className="space-y-4 text-muted-foreground font-medium">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>45 Minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-accent" />
                <span>Video Call</span>
              </div>
              {date && slot && (
                <div className="flex items-center gap-3 text-primary mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10 animate-in fade-in zoom-in duration-300">
                  <CalendarIcon className="w-5 h-5 text-accent" />
                  <span>
                    {format(date, "EEEE, MMMM d")} at{" "}
                    {format(new Date(slot), "hh:mm a")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 p-8 overflow-y-auto">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-bold mb-6">Select a Date & Time</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => {
                        setDate(d);
                        setSlot(null);
                      }}
                      onMonthChange={setCurrentMonth}
                      month={currentMonth}
                      className="rounded-md border shadow-sm p-3 pointer-events-auto"
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                        date >
                          new Date(
                            new Date().setDate(new Date().getDate() + 30),
                          )
                      }
                    />
                  </div>
                  <div className="w-full md:w-48 flex flex-col gap-2">
                    {date ? (
                      <>
                        <p className="text-sm font-semibold mb-2 text-center">
                          {format(date, "EEEE, MMM d")}
                        </p>
                        <div className="flex flex-col gap-2 h-[280px] overflow-y-auto pr-2">
                          {loadingSlots ? (
                            <div className="flex justify-center items-center h-full">
                              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                            </div>
                          ) : displaySlots.length > 0 ? (
                            displaySlots.map((s) => (
                              <Button
                                key={s.iso}
                                variant={slot === s.iso ? "default" : "outline"}
                                className={`w-full justify-center ${slot === s.iso ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                                onClick={() => setSlot(s.iso)}
                              >
                                {s.display}
                              </Button>
                            ))
                          ) : (
                            <div className="text-center text-sm text-muted-foreground mt-8">
                              No available times
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex items-center justify-center text-muted-foreground text-sm text-center p-4 border border-dashed rounded-md">
                        Select a date to see available times
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={!date || !slot}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <Button
                  variant="ghost"
                  className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <h3 className="text-xl font-bold mb-6">Enter Your Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">
                      What is your biggest leadership challenge right now?
                    </Label>
                    <Textarea
                      id="notes"
                      className="resize-none h-24"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-3 mt-4 bg-muted/50 p-4 rounded-md border border-border/50">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="dataConsent"
                        checked={dataConsent}
                        onChange={(e) => setDataConsent(e.target.checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="dataConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I consent to allow PW Coaching LLC to store and process
                        my personal data in accordance with the{" "}
                        <a
                          href="/privacy-policy"
                          className="underline hover:text-primary"
                        >
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="emailConsent"
                        checked={emailConsent}
                        onChange={(e) => setEmailConsent(e.target.checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="emailConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I consent to receive email marketing communications from
                        PW Coaching LLC. I understand I can unsubscribe at any
                        time.
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="smsConsent"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="smsConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I agree to receive SMS text messages from PW Coaching
                        LLC, including coaching program information, appointment
                        scheduling, appointment confirmations, reminders, and
                        follow-up communication related to my inquiry. Consent
                        is not a condition of purchase. Msg frequency varies.
                        Msg & data rates may apply. Reply STOP to opt out, HELP
                        for help.{" "}
                        <a
                          href="/privacy-policy"
                          className="underline hover:text-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a
                          href="/terms"
                          className="underline hover:text-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Terms of Service
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 w-full sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                          Confirming...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w416 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CalendarIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Your strategy session with Paul Woodley is scheduled for{" "}
                  {date && format(date, "MMMM d, yyyy")} at{" "}
                  {slot && format(new Date(slot), "hh:mm a")}. A calendar
                  invitation has been sent to your email.
                </p>
                <Button onClick={() => setOpen(false)} variant="outline">
                  Close Window
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
