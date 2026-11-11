const products = [
  {name:'Umarix Black', price:2999, description:'Bold & Powerful Fragrance', image:'images/perfume1.jpg', available:true, details:'A bold, confident fragrance designed to make a memorable impression.'},
  {name:'Umarix Gold', price:3499, description:'Luxury & Elegant Fragrance', image:'images/perfume2.jpg', available:true, details:'An elegant fragrance for a refined, luxurious feel.'},
  {name:'Umarix Night', price:2499, description:'Fresh & Mysterious Fragrance', image:'images/perfume3.jpg', available:true, details:'A fresh, mysterious scent for evenings and special occasions.'},
  {name:'Umarix Rose', price:null, description:'Soft & Elegant Fragrance', image:'images/perfume4.png', available:false, details:'A soft, elegant fragrance. Price and launch details coming soon.'},
  {name:'Umarix Oud', price:null, description:'Rich & Woody Fragrance', image:'images/perfume5.png', available:false, details:'A rich, woody fragrance. Price and launch details coming soon.'},
  {name:'Umarix Ocean', price:null, description:'Fresh & Aquatic Fragrance', image:'images/perfume6.png', available:false, details:'A fresh, aquatic fragrance. Price and launch details coming soon.'},
  {name:'Umarix Velvet', price:null, description:'Smooth & Sophisticated Fragrance', image:'images/perfume7.png', available:false, details:'A smooth, sophisticated fragrance. Price and launch details coming soon.'},
  {name:'Umarix Royal', price:null, description:'Regal & Luxurious Fragrance', image:'images/perfume8.png', available:false, details:'A regal, luxurious fragrance. Price and launch details coming soon.'},
  {name:'Umarix Musk', price:null, description:'Warm & Memorable Fragrance', image:'images/perfume9.png', available:false, details:'A warm, memorable fragrance. Price and launch details coming soon.'}
];
let cart = [];

function closePopup(){const popup=document.getElementById('welcomePopup');if(popup)popup.style.display='none';}
function formatPrice(price){return price==null?'Price coming soon':'Rs. '+price.toLocaleString('en-PK');}
function addToCart(productName, price){
  const product=products.find(item=>item.name===productName);
  if(!product||!product.available||product.price==null){showCartMessage('This perfume is coming soon.');return;}
  const existing=cart.find(item=>item.name===productName);
  if(existing)existing.quantity++;else cart.push({name:productName,price:Number(price),quantity:1});
  updateCart();showCartMessage(productName+' added to cart!');
}
function updateCart(){const count=document.getElementById('cartCount');if(count)count.textContent=cart.reduce((sum,item)=>sum+item.quantity,0);}
function openCart(){renderCart();document.getElementById('cartBox').classList.add('show');}
function closeCart(){document.getElementById('cartBox').classList.remove('show');}
function renderCart(){
  const items=document.getElementById('cartItems');const totalEl=document.getElementById('cartTotal');let total=0;items.innerHTML='';
  if(!cart.length){items.innerHTML='<p>Your cart is empty.</p>';}
  cart.forEach((item,index)=>{total+=item.price*item.quantity;const row=document.createElement('div');row.className='cart-item';const info=document.createElement('div');const name=document.createElement('h3');name.textContent=item.name;const price=document.createElement('p');price.textContent=`Rs. ${item.price.toLocaleString('en-PK')} × ${item.quantity}`;info.append(name,price);const remove=document.createElement('button');remove.textContent='Remove';remove.addEventListener('click',()=>removeFromCart(index));row.append(info,remove);items.appendChild(row);});
  totalEl.textContent='Rs. '+total.toLocaleString('en-PK');
}
function removeFromCart(index){cart.splice(index,1);updateCart();renderCart();}
let messageTimer;
function showCartMessage(message){const box=document.getElementById('cartMessage');box.textContent='✓ '+message;box.classList.add('show');clearTimeout(messageTimer);messageTimer=setTimeout(()=>box.classList.remove('show'),2200);}
function openCheckout(){const note=document.getElementById('checkoutMessage');note.hidden=false;setTimeout(()=>{note.hidden=true;},3500);if(!cart.length)showCartMessage('Your cart is empty!');}
function openProductDetails(index){
  const product=products[index];if(!product)return;
  document.getElementById('detailImage').src=product.image;document.getElementById('detailImage').alt=product.name;
  document.getElementById('detailName').textContent=product.name;document.getElementById('detailDescription').textContent=product.details;
  document.getElementById('detailPrice').textContent=formatPrice(product.price);
  const add=document.getElementById('detailAddButton');add.style.display=product.available?'inline-flex':'none';add.onclick=()=>addToCart(product.name,product.price);
  const modal=document.getElementById('productModal');modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeProductDetails(){const modal=document.getElementById('productModal');modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.product[data-product]').forEach(card=>{
  const open=()=>openProductDetails(Number(card.dataset.product));
  card.addEventListener('click',open);
  card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open();}});
});
document.getElementById('productModal').addEventListener('click',event=>{if(event.target.id==='productModal')closeProductDetails();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeProductDetails();closeCart();}});
