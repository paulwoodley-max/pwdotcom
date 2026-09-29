import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { validateEmail } from "./formConstants";

export function Step1({
  data,
  setData,
  onNext,
}: {
  data: any;
  setData: (d: any) => void;
  onNext: () => void;
}) {
  const isValid =
    data.firstName &&
    data.lastName &&
    data.email &&
    validateEmail(data.email) &&
    data.phone &&
    isValidPhoneNumber(data.phone) &&
    data.dataConsent;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-primary border-b border-border/50 pb-4">
        Section 1: Contact Information
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            required
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            required
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Phone *</Label>
          <PhoneInput
            international
            defaultCountry="US"
            value={data.phone}
            onChange={(val: string) => setData({ ...data, phone: val || "" })}
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <p className="text-[10px] text-muted-foreground mt-1">
            Include country code (e.g. +1 for USA)
          </p>
        </div>
      </div>
      <div className="space-y-4 pt-4 border-t border-border/50">
        <Label className="text-base font-bold text-primary">
          Consent & Agreements *
        </Label>
        <div className="space-y-4 pl-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="dataConsent"
              checked={data.dataConsent}
              onCheckedChange={(c) => setData({ ...data, dataConsent: !!c })}
              required
            />
            <Label
              htmlFor="dataConsent"
              className="text-sm font-normal cursor-pointer leading-tight pt-0.5"
            >
              I consent to allow PW Coaching LLC to store and process my
              personal data in accordance with the{" "}
              <Link
                to="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              . *
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consentEmail"
              checked={data.emailConsent}
              onCheckedChange={(c) => setData({ ...data, emailConsent: !!c })}
            />
            <Label
              htmlFor="consentEmail"
              className="text-sm font-normal cursor-pointer leading-tight pt-0.5"
            >
              I consent to receive email marketing communications from PW
              Coaching LLC, including follow-up tips, prompts, resources,
              workbooks, guides, challenge invitations, and related offers. I
              understand I can unsubscribe at any time. (Optional)
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consentSms"
              checked={data.smsConsent}
              onCheckedChange={(c) => setData({ ...data, smsConsent: !!c })}
            />
            <Label
              htmlFor="consentSms"
              className="text-sm font-normal cursor-pointer leading-tight pt-0.5"
            >
              I agree to receive SMS text messages from PW Coaching LLC,
              including coaching program information, appointment scheduling,
              appointment confirmations, reminders, and follow-up communication
              related to my inquiry. Consent is not a condition of purchase. Msg
              frequency varies. Msg & data rates may apply. Reply STOP to opt
              out, HELP for help.{" "}
              <Link
                to="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </Label>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-border/50 flex justify-end">
        <Button
          type="button"
          size="lg"
          onClick={onNext}
          disabled={!isValid}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide h-12 px-8"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}
