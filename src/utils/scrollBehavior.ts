export function scrollBehavior(isMobile: boolean): void {
  let sections: String[] = [];
  if (!isMobile) {
    sections = ["home", "about", "specials", "reviews", "contact"];
    for (const sec of sections) {
      const link = document.getElementById(`${sec}Link`);
      const section = document.getElementById(`${sec}Section`);
      link?.addEventListener("click", () => {
        section?.scrollIntoView({ behavior: "smooth" });
      });
    }
  } else {
    sections = [
      "mobileHome",
      "mobileAbout",
      "mobileSpecials",
      "mobileReviews",
      "mobileContact",
    ];
    for (const sec of sections) {
      const link = document.getElementById(`${sec}Link`);
      const section = document.getElementById(
        `${sec.slice(6).toLowerCase()}Section`
      );
      link?.addEventListener("click", () => {
        section?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
}
