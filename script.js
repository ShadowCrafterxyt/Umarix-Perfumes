/* UMARIX PERFUMES — black, gold and cream theme */
:root {
    --black: #080808;
    --panel: #151515;
    --gold: #d9ad35;
    --gold-bright: #ffd700;
    --cream: #f6f0e4;
    --muted: #bdb6a9;
    --border: rgba(217, 173, 53, 0.28);
    --shadow: 0 18px 45px rgba(0, 0, 0, 0.38);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 90px; }
body { margin: 0; background: var(--black); color: var(--cream); font-family: Arial, Helvetica, sans-serif; line-height: 1.6; }
button, input, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
.navbar { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 16px clamp(18px, 5vw, 72px); background: rgba(8,8,8,.96); border-bottom: 1px solid var(--border); backdrop-filter: blur(12px); }
.logo { color: var(--gold-bright); font-weight: 900; letter-spacing: .12em; white-space: nowrap; }
.logo span { display: block; color: var(--cream); font-size: .65rem; letter-spacing: .28em; }
.nav-links { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: clamp(12px, 2vw, 28px); }
.nav-links a { color: var(--cream); font-weight: 600; }
.nav-links a:hover { color: var(--gold-bright); }
.cart-link { padding: 10px 15px; color: #080808; background: var(--gold-bright); border: 1px solid #000; border-radius: 7px; font-weight: 800; white-space: nowrap; }
.home { display: flex; align-items: center; justify-content: space-between; gap: 40px; min-height: 510px; padding: 82px clamp(24px, 8vw, 120px); background: radial-gradient(circle at 80% 45%, rgba(217,173,53,.16), transparent 32%), linear-gradient(120deg,#090909,#17140d 70%,#080808); }
.home-content { max-width: 700px; }
.eyebrow { margin: 0 0 10px; color: var(--gold-bright); font-size: .78rem; font-weight: 800; letter-spacing: .22em; text-transform: uppercase; }
.home h1 { margin: 0; font: 800 clamp(2.8rem, 7vw, 5.8rem)/1.05 Georgia, 'Times New Roman', serif; letter-spacing: -.04em; }
.home h1 span { color: var(--gold-bright); }
.hero-text { max-width: 550px; margin: 24px 0; color: var(--muted); font-size: 1.05rem; }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 14px; }
.gold-button, .outline-button, .add-button, .details-button, .enter-button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 11px 18px; border: 1px solid var(--gold-bright); border-radius: 7px; font-weight: 800; transition: background .2s, color .2s; }
.gold-button, .add-button, .enter-button { color: #080808; background: var(--gold-bright); }
.gold-button:hover, .add-button:hover, .enter-button:hover { color: var(--gold-bright); background: #080808; }
.outline-button, .details-button { color: var(--gold-bright); background: transparent; }
.outline-button:hover, .details-button:hover { color: #080808; background: var(--gold-bright); }
.hero-badge { flex: 0 0 auto; padding: 35px 28px; color: var(--gold-bright); border: 1px solid var(--border); border-radius: 50%; text-align: center; font-weight: 800; letter-spacing: .12em; line-height: 1.8; }
.hero-badge span { font-size: 2.2rem; }
.section { padding: 76px clamp(18px, 5vw, 70px); }
.section > .eyebrow, .section > h2, .section-intro { text-align: center; }
.section h2 { margin: 0 0 12px; color: var(--cream); font: 700 clamp(2rem,4vw,3rem)/1.2 Georgia, 'Times New Roman', serif; }
.section-intro { margin: 0 auto; color: var(--muted); }
.why-umarix, .about { background: #0d0d0d; }
.why-cards { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; width: min(1100px,100%); margin: 34px auto 0; }
.why-card { padding: 26px 22px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; text-align: center; }
.why-icon { color: var(--gold-bright); font-size: 2rem; }
.why-card h3 { margin: 10px 0 6px; }
.why-card p { margin: 0; color: var(--muted); }
.products-section { width: 100%; text-align: center; }
.products { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 28px; width: min(1100px,100%); margin: 32px auto 0; align-items: stretch; }
.product { display: flex; min-width: 0; flex-direction: column; overflow: hidden; background: linear-gradient(160deg,#1b1b1b,#101010); border: 1px solid var(--border); border-radius: 12px; text-align: center; box-shadow: 0 8px 28px rgba(0,0,0,.22); transition: transform .2s,border-color .2s; }
.product:hover, .product:focus-visible { transform: translateY(-4px); border-color: var(--gold-bright); outline: none; }
.product-image { position: relative; display: flex; align-items: center; justify-content: center; min-height: 250px; padding: 18px; background: radial-gradient(circle,#282318 0%,#151515 68%); }
.product-image img { width: 100%; height: 250px; object-fit: contain; margin: 0 auto; }
.product-number { position: absolute; top: 12px; left: 12px; padding: 3px 9px; color: var(--gold-bright); background: rgba(0,0,0,.72); border: 1px solid var(--border); border-radius: 20px; font-size: .75rem; }
.product-info { display: flex; flex: 1; flex-direction: column; align-items: center; padding: 20px 18px 22px; }
.product-info h3 { margin: 0 0 6px; font: 700 1.25rem Georgia,'Times New Roman',serif; }
.product-description { min-height: 26px; margin: 0 0 8px; color: var(--muted); font-size: .9rem; }
.card-rating { margin: 0 0 8px; color: var(--gold-bright); font-size: .95rem; }
.card-rating span { color: var(--muted); font-size: .76rem; }
.product-price { margin: 0 0 14px; color: var(--gold-bright); font-size: 1.1rem; font-weight: 800; }
.add-button, .details-button { width: 100%; max-width: 230px; margin-top: 8px; }
.about, .contact { text-align: center; }
.about p:not(.eyebrow), .contact p:not(.eyebrow) { max-width: 760px; margin: 12px auto; color: var(--muted); }
footer { padding: 22px 18px; color: var(--muted); background: #050505; border-top: 1px solid var(--border); text-align: center; }
footer p { margin: 0; font-size: .85rem; }
.popup, .modal { position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(0,0,0,.86); }
.popup-box { width: min(440px,100%); padding: 42px 28px; background: linear-gradient(145deg,#1d1a12,#080808); border: 1px solid var(--gold); border-radius: 14px; box-shadow: var(--shadow); text-align: center; }
.popup-box h1 { margin: 4px 0 8px; color: var(--gold-bright); font: 700 3rem Georgia,'Times New Roman',serif; }
.enter-button { border: 2px solid #000; }
.cart-box { position: fixed; top: 84px; right: 18px; z-index: 120; display: none; width: min(400px,calc(100vw - 36px)); max-height: calc(100vh - 110px); padding: 22px; overflow: auto; background: #151515; border: 1px solid var(--gold); border-radius: 12px; box-shadow: var(--shadow); }
.cart-box.show { display: block; }
.cart-header { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 18px; }
.cart-header h2 { margin: 0; }
.cart-header button, .modal-close { width: 38px; height: 38px; color: var(--cream); background: #222; border: 1px solid var(--border); border-radius: 50%; font-size: 1.5rem; }
.cart-item { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 13px 0; border-bottom: 1px solid var(--border); }
.cart-item h3, .cart-item p { margin: 0; }
.cart-item p, .checkout-message { color: var(--muted); font-size: .9rem; }
.cart-item button { padding: 7px 10px; color: var(--cream); background: #292929; border: 1px solid #555; border-radius: 6px; }
.cart-total { display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; color: var(--gold-bright); }
.checkout-button { width: 100%; }
.cart-message { position: fixed; right: 18px; bottom: 18px; z-index: 250; max-width: calc(100vw - 36px); padding: 13px 18px; color: #080808; background: var(--gold-bright); border-radius: 8px; opacity: 0; pointer-events: none; transform: translateY(8px); transition: opacity .2s,transform .2s; }
.cart-message.show { opacity: 1; transform: translateY(0); }
.modal { display: none; z-index: 180; }
.modal.show { display: flex; }
.modal-card { position: relative; display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 24px; width: min(900px,100%); max-height: 90vh; padding: 28px; overflow: auto; background: var(--panel); border: 1px solid var(--border); border-radius: 14px; box-shadow: var(--shadow); }
.modal-image-wrap { display: flex; align-items: center; justify-content: center; min-height: 260px; background: #101010; border-radius: 8px; }
.modal-image-wrap img { width: 100%; height: 330px; object-fit: contain; }
.modal-copy { min-width: 0; }
.modal-copy h2 { margin: 0 0 8px; font: 700 2rem Georgia,'Times New Roman',serif; }
.modal-copy p { color: var(--muted); }
.modal-price, .average-rating { color: var(--gold-bright) !important; font-weight: 800; }
.modal-close { position: absolute; top: 8px; right: 8px; z-index: 2; }
.modal-copy hr { margin: 20px 0; border: 0; border-top: 1px solid var(--border); }
.modal-copy h3 { margin-bottom: 8px; }
#reviewForm { display: grid; gap: 8px; }
#reviewForm input:not([type=radio]), #reviewForm textarea { width: 100%; padding: 10px 12px; color: var(--cream); background: #0c0c0c; border: 1px solid #484034; border-radius: 7px; }
#reviewForm label, #reviewForm legend { color: var(--cream); font-size: .9rem; }
.rating-field { margin: 4px 0; padding: 0; border: 0; }
.star-picker { display: flex; gap: 8px; }
.star-picker label { cursor: pointer; }
.star-picker input { position: absolute; opacity: 0; }
.star-picker span { color: #777; font-size: 2rem; }
.star-picker label:has(input:checked) span, .star-picker label:has(input:checked) ~ label span { color: var(--gold-bright); }
.star-picker label:has(input:focus-visible) span { outline: 2px solid var(--gold-bright); }
.form-note { margin: 2px 0; font-size: .78rem; }
.review-item { margin: 12px 0; padding: 12px; background: #0d0d0d; border: 1px solid var(--border); border-radius: 8px; }
.review-item strong { color: var(--cream); }
.review-stars { color: var(--gold-bright); }
.review-item p { margin: 5px 0 0; overflow-wrap: anywhere; }
.no-reviews { color: var(--muted); font-size: .9rem; }
@media (max-width: 800px) { .navbar { flex-wrap: wrap; justify-content: center; } .nav-links { order: 3; width: 100%; } .home { min-height: auto; padding-top: 65px; padding-bottom: 65px; } .hero-badge { display: none; } .products, .why-cards { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 20px; } .modal-card { grid-template-columns: minmax(0,1fr); gap: 16px; } .modal-image-wrap img { height: 220px; } }
@media (max-width: 520px) { .navbar { gap: 12px; padding: 14px; } .nav-links { gap: 14px; } .nav-links a { font-size: .85rem; } .home { padding: 55px 22px; } .home h1 { font-size: clamp(2.5rem,12vw,3.6rem); } .hero-buttons { flex-direction: column; align-items: stretch; } .section { padding: 52px 16px; } .products, .why-cards { grid-template-columns: minmax(0,1fr); width: min(360px,100%); margin-left: auto; margin-right: auto; } .product-image, .product-image img { height: 230px; min-height: 230px; } .modal-card { padding: 22px 16px; } }
