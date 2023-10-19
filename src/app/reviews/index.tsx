import {
  ReviewCard,
  ReviewCardTitle,
  ReviewCardBody,
  ReviewCardAuthor,
} from "@/components/cards/ReviewCard";

export function Reviews() {
  return (
    <div
      data-testid="reviews"
      id="reviewsSection"
      className="relative grid grid-cols-1 justify-items-center bg-reviews bg-no-repeat bg-cover bg-center gap-14 p-6 md:p-24 lg:p-32 md:grid-cols-1 md:bg-reviewsLg md:gap-10 lg:grid-cols-3"
    >
      <div className="absolute h-full w-full bg-black/50 z-10"></div>
      <ReviewCard>
        <ReviewCardTitle>Hidden Gems...</ReviewCardTitle>
        <ReviewCardBody>
          A hidden gem in the heart of the city, Bistro Senca exceeded all my
          expectations. The food was a culinary journey around the world, and
          every dish we ordered was a delight to the senses.
        </ReviewCardBody>
        <ReviewCardAuthor>Aziz Light</ReviewCardAuthor>
      </ReviewCard>
      <ReviewCard>
        <ReviewCardTitle>Old friends...</ReviewCardTitle>
        <ReviewCardBody>
          What a delightful find! Bistro Senca felt like a warm hug in the form
          of a restaurant. The staff here are like old friends, always ready
          with a smile and a recommendation. I can't wait to make Bistro Senca
          my regular spot for special nights out.
        </ReviewCardBody>
        <ReviewCardAuthor>Nuaght Marvin</ReviewCardAuthor>
      </ReviewCard>
      <ReviewCard>
        <ReviewCardTitle>Home away from home...</ReviewCardTitle>
        <ReviewCardBody>
          After a long day of sightseeing, I stumbled upon this charming gem.
          The cozy ambiance and inviting staff instantly put me at ease, making
          me feel like I had found a home away from home.
        </ReviewCardBody>
        <ReviewCardAuthor>Itsa Itsa</ReviewCardAuthor>
      </ReviewCard>
    </div>
  );
}
