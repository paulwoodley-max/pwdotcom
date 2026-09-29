import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  COMMITMENT_OPTIONS,
  TIMING_OPTIONS,
  CALL_WINDOW_OPTIONS,
  RadioList,
} from "./formConstants";

export function Step3({
  data,
  setData,
  onPrev,
  submitting,
}: {
  data: any;
  setData: (d: any) => void;
  onPrev: () => void;
  submitting: boolean;
}) {
  const agreements = data.agreements;
  const setAgreement = (key: string, val: boolean) =>
    setData({ ...data, agreements: { ...agreements, [key]: val } });

  const allChecked =
    agreements.understandActive &&
    agreements.willingDaily &&
    agreements.willingHonest &&
    agreements.understandFit;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-primary border-b border-border/50 pb-4">
        Section 3: Challenge Commitment
      </h2>
      <div className="space-y-4">
        <Label className="text-base">
          The Do Not Be Anxious 5-Day Challenge works best when you are willing
          to complete one small action each day. Are you willing to participate
          actively for 5 days? *
        </Label>
        <RadioGroup
          value={data.commitment}
          onValueChange={(v) => setData({ ...data, commitment: v })}
          required
        >
          <RadioList options={COMMITMENT_OPTIONS} prefix="com" />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <Label className="text-base">
          Are you willing to have your first call within the next 24–72 hours if
          Paul has availability? *
        </Label>
        <RadioGroup
          value={data.timing}
          onValueChange={(v) => setData({ ...data, timing: v })}
          required
        >
          <RadioList options={TIMING_OPTIONS} prefix="tim" />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <Label className="text-base">
          What time of day is usually best for your first call? *
        </Label>
        <RadioGroup
          value={data.callWindow}
          onValueChange={(v) => setData({ ...data, callWindow: v })}
          required
        >
          <RadioList options={CALL_WINDOW_OPTIONS} prefix="win" />
        </RadioGroup>
      </div>
      <div className="space-y-4 pt-4">
        <Label className="text-base font-bold text-primary">
          Challenge Agreement *
        </Label>
        <div className="space-y-3 pl-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="agr1"
              checked={agreements.understandActive}
              onCheckedChange={(c) => setAgreement("understandActive", !!c)}
            />
            <Label
              htmlFor="agr1"
              className="font-normal cursor-pointer leading-tight pt-0.5"
            >
              I understand this is a 5-day active challenge, not a passive
              download.
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="agr2"
              checked={agreements.willingDaily}
              onCheckedChange={(c) => setAgreement("willingDaily", !!c)}
            />
            <Label
              htmlFor="agr2"
              className="font-normal cursor-pointer leading-tight pt-0.5"
            >
              I am willing to complete small daily actions.
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="agr3"
              checked={agreements.willingHonest}
              onCheckedChange={(c) => setAgreement("willingHonest", !!c)}
            />
            <Label
              htmlFor="agr3"
              className="font-normal cursor-pointer leading-tight pt-0.5"
            >
              I am willing to be honest about what is really keeping me stuck.
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="agr4"
              checked={agreements.understandFit}
              onCheckedChange={(c) => setAgreement("understandFit", !!c)}
            />
            <Label
              htmlFor="agr4"
              className="font-normal cursor-pointer leading-tight pt-0.5"
            >
              I understand Paul will determine fit and discuss next steps during
              the first call.
            </Label>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-border/50 flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onPrev}
            className="h-14 px-8 w-full sm:w-auto"
          >
            Previous
          </Button>
          <Button
            type="submit"
            size="lg"
            disabled={submitting || !allChecked}
            className="w-full sm:flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide h-14 text-lg"
          >
            {submitting ? "Submitting Application..." : "Submit Application"}
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-3">
          "Tiny Challenge" is a registered trademark of Point One and is used
          for identification purposes only.
        </p>
      </div>
    </div>
  );
}
