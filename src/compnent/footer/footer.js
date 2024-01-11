import "./style.css";
export const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer">
            <i class="icon ion-social-snapchat"></i>
          </a>
          <a
            href="https://twitter.com/home?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Services</a>
          </li>
          <li class="list-inline-item">
            <a href="/">About</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
