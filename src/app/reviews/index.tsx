import {
  ReviewCard,
  ReviewCardTitle,
  ReviewCardBody,
  ReviewCardAuthor,
} from "@/components/cards/ReviewCard";

import { reviews } from "@/data";

export function Reviews() {
  return (
    <div
      data-testid="reviews"
      id="reviewsSection"
      className="relative grid grid-cols-1 justify-items-center bg-reviews bg-no-repeat bg-cover bg-center gap-14 p-6 md:p-24 lg:p-32 md:grid-cols-1 md:bg-reviewsLg md:gap-10 lg:grid-cols-3"
    >
      <div className="absolute h-full w-full bg-black/50 z-10"></div>
      {reviews.map((review) => {
        return (
          <ReviewCard key={review.id}>
            <ReviewCardTitle>{review.title}</ReviewCardTitle>
            <ReviewCardBody>{review.content}</ReviewCardBody>
            <ReviewCardAuthor>{review.author}</ReviewCardAuthor>
          </ReviewCard>
        );
      })}
    </div>
  );
}
