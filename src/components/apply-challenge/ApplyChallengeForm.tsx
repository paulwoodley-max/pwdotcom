import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { validateEmail } from "./formConstants";

export type SubmissionOutcome = "qualified" | "warm" | "not_ready";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dataConsent: false,
  emailConsent: false,
  smsConsent: false,
  situation: "",
  focus: "",
  desiredOutcome: "",
  urgency: "",
  readiness: "",
  commitment: "",
  timing: "",
  callWindow: "",
  agreements: {
    understandActive: false,
    willingDaily: false,
    willingHonest: false,
    understandFit: false,
  },
};

export function ApplyChallengeForm({
  onSubmitted,
}: {
  onSubmitted: (outcome: SubmissionOutcome) => void;
}) {
  const [data, setData] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

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

  const calculateScore = () => {
    let score = 0;
    const highSituation = [
      "I feel stuck and need clarity.",
      "I am behind where I want to be professionally.",
      "I am carrying pressure and need a better plan.",
      "I am in a transition season and need direction.",
      "I am trying to grow, lead, or decide what is next.",
    ];
    if (highSituation.includes(data.situation)) score += 15;
    if (data.desiredOutcome.trim().length > 5) score += 15;
    if (data.urgency.includes("Very urgent")) score += 20;
    else if (data.urgency.includes("Important")) score += 15;
    else if (data.urgency.includes("Somewhat important")) score += 5;
    if (data.readiness.includes("ready to be honest")) score += 20;
    else if (data.readiness.includes("open, but I may need help")) score += 10;
    else if (data.readiness.includes("interested, but not sure")) score += 5;
    if (data.commitment.includes("Yes, I can commit")) score += 20;
    else if (data.commitment.includes("Yes, but I may need flexibility"))
      score += 10;
    if (data.timing.includes("within the next 24 hours")) score += 15;
    else if (data.timing.includes("within the next 2–3 days")) score += 10;
    else if (data.timing.includes("later date")) score += 5;
    if (
      data.agreements.understandActive &&
      data.agreements.willingDaily &&
      data.agreements.willingHonest &&
      data.agreements.understandFit
    ) {
      score += 20;
    }
    return score;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.email ||
      !data.phone ||
      !data.situation ||
      !data.focus ||
      !data.urgency ||
      !data.readiness ||
      !data.commitment ||
      !data.timing ||
      !data.callWindow
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }
    if (!validateEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isValidPhoneNumber(data.phone)) {
      toast.error("Please enter a valid phone number with country code.");
      return;
    }
    if (!data.dataConsent) {
      toast.error(
        "You must consent to data processing to submit the application.",
      );
      return;
    }

    setSubmitting(true);
    const score = calculateScore();
    const allAgreementsChecked =
      data.agreements.understandActive &&
      data.agreements.willingDaily &&
      data.agreements.willingHonest &&
      data.agreements.understandFit;
    const goodTiming =
      data.timing.includes("24 hours") || data.timing.includes("2–3 days");

    let outcome: SubmissionOutcome = "not_ready";
    if (score >= 85 && allAgreementsChecked && goodTiming) {
      outcome = "qualified";
    } else if (score >= 60 && score < 85) {
      outcome = "warm";
    }
    if (
      score < 60 ||
      data.commitment.includes("not sure") ||
      data.commitment.includes("cannot commit")
    ) {
      outcome = "not_ready";
    }

    const tags = [
      "funnel:5-day-tiny-challenge",
      "source:appointment-funnel",
      "lead-magnet:5-day-tiny-challenge",
      "pwc-data-consent-yes",
      "consent: data-processing-yes",
      "tcpa-method",
      "gdpr-compliant",
    ];
    if (data.emailConsent) {
      tags.push("pwc-email-consent-yes", "consent: email-marketing-yes");
    } else {
      tags.push(
        "pwc-email-consent-no",
        "consent: email-marketing-no",
        "do-not-email",
      );
    }
    if (data.smsConsent) {
      tags.push(
        "pwc-sms-consent-yes",
        "consent: sms-yes",
        "pwc-tcpa-sms-compliant",
      );
    } else {
      tags.push("pwc-sms-consent-no", "consent: sms-none", "do-not-sms");
    }
    if (outcome === "qualified") {
      tags.push(
        "challenge-fit:qualified",
        "intent:book-challenge",
        "appointment-funnel:qualified",
        "challenge-agreement:accepted",
      );
    } else if (outcome === "warm") {
      tags.push("challenge-fit:warm", "appointment-funnel:nurture");
    } else {
      tags.push("challenge-fit:not-ready", "appointment-funnel:not-ready");
    }
    if (data.commitment.includes("Yes, I can commit"))
      tags.push("challenge-commitment:yes");
    else if (data.commitment.includes("flexibility"))
      tags.push("challenge-commitment:flexible");
    else tags.push("challenge-commitment:no");
    if (data.readiness.includes("ready to be honest"))
      tags.push("readiness:high");
    else if (data.readiness.includes("help getting clear"))
      tags.push("readiness:medium");
    else tags.push("readiness:low");
    if (data.timing.includes("24 hours")) tags.push("availability:24-hours");
    else if (data.timing.includes("2–3 days"))
      tags.push("availability:72-hours");
    else tags.push("availability:later");

    const aiSummary = `Lead Summary:
${data.firstName} is interested in the Do Not Be Anxious 5-Day Challenge because ${data.situation}. Their main focus is ${data.focus}. They want ${data.desiredOutcome} by the end of the 5 days. Their urgency level is ${data.urgency}. Their coaching readiness is ${data.readiness}. Their commitment level is ${data.commitment}. Their preferred call window is ${data.callWindow}. Recommended status: ${outcome === "qualified" ? "Qualified" : outcome === "warm" ? "Warm" : "Not Ready"}.`;

    const trackingPayload = {
      type: "external form_submission",
      formId: "Challenge Application Form",
      formName: "Challenge Application Form",
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      tags,
      formData: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        pwc_email_marketing_consent: data.emailConsent ? "Yes" : "No",
        pwc_sms_consent: data.smsConsent ? "Yes" : "No",
        pwc_data_processing_consent: data.dataConsent ? "Yes" : "No",
        pwc_current_situation: data.situation,
        pwc_challenge_focus: data.focus,
        pwc_desired_outcome: data.desiredOutcome,
        pwc_urgency_level: data.urgency,
        pwc_coaching_readiness: data.readiness,
        pwc_5day_commitment: data.commitment,
        pwc_first_call_timing: data.timing,
        pwc_preferred_call_window: data.callWindow,
        pwc_challenge_agreement: allAgreementsChecked ? "Yes" : "No",
        pwc_challenge_qualification_score: score.toString(),
        pwc_ai_summary: aiSummary,
        pwc_consent_timestamp: new Date().toISOString(),
        pwc_consent_source_url: window.location.href,
        pwc_consent_form_name: "Challenge Application Form",
        pwc_lead_source: "AI Studio Form",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      trackingId: "tk_329cd5260fad40de8037e39108281e00",
      locationId: "hshXh4CwDZppYoxoTSVo",
    };

    // @ts-ignore
    if (window.HighLevelTracking) {
      // @ts-ignore
      window.HighLevelTracking.track(trackingPayload);
    } else {
      fetch("https://services.leadconnectorhq.com/funnels/funnel/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trackingPayload),
      }).catch(console.error);
    }

    setTimeout(() => {
      onSubmitted(outcome);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border/50"
    >
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-primary mb-2">
          <span>
            Step {currentStep} of {totalSteps}
          </span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
      </div>

      {currentStep === 1 && (
        <Step1 data={data} setData={setData} onNext={() => setCurrentStep(2)} />
      )}
      {currentStep === 2 && (
        <Step2
          data={data}
          setData={setData}
          onPrev={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 3 && (
        <Step3
          data={data}
          setData={setData}
          onPrev={() => setCurrentStep(2)}
          submitting={submitting}
        />
      )}
    </form>
  );
}
