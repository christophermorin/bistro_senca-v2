import {
  SpecialsCard,
  SpecialsImg,
  SpecialsBody,
} from "@/components/cards/SpecialsCard";
import { specials } from "@/data";

export function Specials() {
  return (
    <div
      data-testid="specials"
      id="specialsSection"
      className="grid grid-cols-1 gap-x-6 gap-y-12 bg-black p-6 md:p-24 lg:p-32 md:grid-cols-2 lg:grid-cols-3"
    >
      {specials.map((special) => {
        return (
          <SpecialsCard key={special.id}>
            <SpecialsImg></SpecialsImg>
            <SpecialsBody day={special.day} body={special.content} />
          </SpecialsCard>
        );
      })}
    </div>
  );
}
