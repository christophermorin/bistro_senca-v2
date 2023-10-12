import { CardsContainer } from "@/components/containers/CardContainer";
import {
  SpecialsCard,
  SpecialsImg,
  SpecialsBody,
} from "@/components/cards/SpecialsCard";

export function Specials() {
  return (
    <CardsContainer className="grid grid-cols-1 gap-x-6 gap-y-12 bg-black md:grid-cols-2 lg:grid-cols-3">
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Monday"}
          body={
            "The gateway to the Mediterranean. We invite you to savor the inspirations of this sun-kissed region, where fresh ingredients and aromatic herbs come together to create a delightful culinary experience."
          }
          />
      </SpecialsCard>
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Tuesday"}
          body={
            "Bring a symphony of pasta to your table. Our pasta specials vary each week, promising you a delightful surprise as our chefs explore various pasta traditions and flavors."
          }
          />
      </SpecialsCard>
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Wednesday"}
          body={
            "Join us for a seafood discovery where our chefs craft a unique seafood special, ensuring that each meal is an exciting journey into the world of maritime tastes."
          }
          />
      </SpecialsCard>
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Thursday"}
          body={
            "A global expedition for your taste buds. We draw inspiration from a different corner of the world each week, offering a diverse culinary experience that takes you on a voyage of flavors."
          }
          />
      </SpecialsCard>
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Friday"}
          body={
            "Fridays are a canvas for our chef's creativity. Expect an exhilarating surprise as our chef crafts a unique dish, showcasing their talent and passion for culinary innovation."
          }
          />
      </SpecialsCard>
      <SpecialsCard>
        <SpecialsImg></SpecialsImg>
        <SpecialsBody
          day={"Saturday"}
          body={
            "Our rotating special ensures that every Saturday is an opportunity to savor a rich and fulfilling dish, perfect for your weekend dining pleasure."
          }
          />
      </SpecialsCard>
    </CardsContainer>
  );
}
