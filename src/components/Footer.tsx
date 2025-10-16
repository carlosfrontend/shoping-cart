const Footer = () => {
  return (
    <footer className="relative bottom-0 h-[10dvh] left-0 bg-background/95  w-full flex items-center justify-center">
      <small className="text-sm">
        Created by{" "}
        <a
          className="text-foreground/60 hover:text-primary "
          href="https://github.com/carlosfrontend"
          target="_blank"
          rel="noreferer noopener"
        >
          @carlosfrontend
        </a>
      </small>
    </footer>
  );
};
export default Footer;
