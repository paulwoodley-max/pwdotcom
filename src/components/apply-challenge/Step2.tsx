import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SITUATION_OPTIONS,
  FOCUS_OPTIONS,
  URGENCY_OPTIONS,
  READINESS_OPTIONS,
  RadioList,
} from "./formConstants";

export function Step2({
  data,
  setData,
  onPrev,
  onNext,
}: {
  data: any;
  setData: (d: any) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const isValid =
    data.situation &&
    data.focus &&
    data.desiredOutcome.trim().length > 0 &&
    data.urgency &&
    data.readiness;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-primary border-b border-border/50 pb-4">
        Section 2: Qualification Questions
      </h2>
      <div className="space-y-4">
        <Label className="text-base">
          Which best describes why you are here right now? *
        </Label>
        <RadioGroup
          value={data.situation}
          onValueChange={(v) => setData({ ...data, situation: v })}
          required
        >
          <RadioList options={SITUATION_OPTIONS} prefix="sit" />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <Label className="text-base">
          What area do you most want help with during the 5 days? *
        </Label>
        <RadioGroup
          value={data.focus}
          onValueChange={(v) => setData({ ...data, focus: v })}
          required
        >
          <RadioList options={FOCUS_OPTIONS} prefix="foc" />
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="desiredOutcome" className="text-base">
          In one sentence, what do you want to be different by the end of the 5
          days? *
        </Label>
        <Textarea
          id="desiredOutcome"
          required
          value={data.desiredOutcome}
          onChange={(e) => setData({ ...data, desiredOutcome: e.target.value })}
          rows={3}
        />
      </div>
      <div className="space-y-4">
        <Label className="text-base">How urgent is this for you? *</Label>
        <RadioGroup
          value={data.urgency}
          onValueChange={(v) => setData({ ...data, urgency: v })}
          required
        >
          <RadioList options={URGENCY_OPTIONS} prefix="urg" />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <Label className="text-base">
          What best describes your willingness to be coached? *
        </Label>
        <RadioGroup
          value={data.readiness}
          onValueChange={(v) => setData({ ...data, readiness: v })}
          required
        >
          <RadioList options={READINESS_OPTIONS} prefix="read" />
        </RadioGroup>
      </div>
      <div className="pt-8 border-t border-border/50 flex justify-between">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onPrev}
          className="h-12 px-8"
        >
          Previous
        </Button>
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
