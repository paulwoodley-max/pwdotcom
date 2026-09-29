import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const SITUATION_OPTIONS = [
  "I feel stuck and need clarity.",
  "I am behind where I want to be professionally.",
  "I am carrying pressure and need a better plan.",
  "I am in a transition season and need direction.",
  "I am trying to grow, lead, or decide what is next.",
  "I am just curious.",
];

export const FOCUS_OPTIONS = [
  "Clarity and decision-making",
  "Career direction or next opportunity",
  "Leadership pressure",
  "Sales, income, or business growth",
  "Faith, identity, and purpose",
  "Confidence and taking action",
  "Other",
];

export const URGENCY_OPTIONS = [
  "Very urgent — I need to take action now.",
  "Important — I want to start within the next few days.",
  "Somewhat important — I am exploring options.",
  "Not urgent — I am mainly gathering information.",
];

export const READINESS_OPTIONS = [
  "I am ready to be honest and take action.",
  "I am open, but I may need help getting clear.",
  "I am interested, but not sure I am ready yet.",
  "I mostly want information.",
];

export const COMMITMENT_OPTIONS = [
  "Yes, I can commit to the 5 days.",
  "Yes, but I may need flexibility.",
  "I am not sure.",
  "No, I cannot commit right now.",
];

export const TIMING_OPTIONS = [
  "Yes, within the next 24 hours.",
  "Yes, within the next 2–3 days.",
  "I need a later date.",
  "I am not ready to book yet.",
];

export const CALL_WINDOW_OPTIONS = [
  "Morning",
  "Afternoon",
  "Either morning or afternoon",
];

export function RadioList({
  options,
  prefix,
}: {
  options: string[];
  prefix: string;
}) {
  return (
    <>
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-3">
          <RadioGroupItem value={option} id={`${prefix}-${option}`} />
          <Label
            htmlFor={`${prefix}-${option}`}
            className="font-normal cursor-pointer"
          >
            {option}
          </Label>
        </div>
      ))}
    </>
  );
}
