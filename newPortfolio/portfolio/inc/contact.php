<div id="contact" class="contact">
        <div class="contact-header lazyUp">Formularz Kontaktowy<span>.</span></div>
        <form class="contact-form lazyUp" action="./php/mail.php" method="POST">
            <label>Podaj swoję imię/nazwę swojej firmy:</label>
            <input type="text" name="name" placeholder="Abym wiedział kto do mnie pisze" required>
            <label>Podaj swój e-mail:</label>
            <input type="email" name="email" placeholder="Abym mógł odpowiedzieć" required>
            <label>Napisz swoją wiadomość:</label>
            <textarea rows="12" name="message" placeholder="Chętnie odpowiem na każdą wiadomość! Będe się cieszył jeśli będzie to oferta współpracy!" required></textarea>
            <button>Wyślij</button>
        </form>
    </div>