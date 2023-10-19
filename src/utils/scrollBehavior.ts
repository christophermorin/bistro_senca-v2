export function scrollBehavior(): void {
  const sections = ["home", "about", "specials", "reviews", "contact"];

  for (const sec of sections) {
    const link = document.getElementById(`${sec}Link`);
    const section = document.getElementById(`${sec}Section`);
    link?.addEventListener("click", () => {
      section?.scrollIntoView({ behavior: "smooth" });
    });
  }
}
