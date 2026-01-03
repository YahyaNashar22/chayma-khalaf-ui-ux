const Nav = () => {
  const links = ["home", "about", "works", "contact_me"];
  const formatLinkName = (link: string): string => {
    return link
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 w-screen flex items-center justify-center md:justify-end px-8 py-6 z-50 pointer-events-none overflow-hidden  mix-blend-difference">
      <nav className="flex items-center gap-4 md:gap-8 pointer-events-auto">
        {links.map((link) => (
          <p
            key={link}
            onClick={() => scrollToElement(link)}
            className={`text-white font-roboto text-xl font-light cursor-pointer
          ${
            link === "contact_me"
              ? "border rounded-full px-3 py-1 bg-[#B9B6B6]/17"
              : ""
          }
          `}
          >
            {formatLinkName(link)}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
