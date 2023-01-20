export const navbar =()=>{
    return ` <nav class="topnav">
    <h2>Brand Waali Quality, Bazaar Waali Deal!</h2>
    <ul>
        <li><a href="">Impact@Snapdeal</a></li>
        <li><a href="">Gift Cards</a></li>
        <li><a href="">Help Center</a></li>
        <li><a href="">Sell On Snapdeal</a></li>
        <li>
            <a href=""> <i class="fas fa-mobile-alt"></i> Download App</a>
        </li>
    </ul>
</nav>

<nav class="mainnav">
    <div class="logoimg">
    <img src="./scripts/clickdeal.png" alt="">
    <h3>clickdeal</h3>
    </div>
    <div class = "menubar">
    <div class = "menu">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    </div>
    <div class="leftside"></div>
    </div>
    <div class="search">
    <input type="text" placeholder="Search products & brands" id="search"/>
    <button class="btn" id="srhbtn"><i class="fas fa-search"></i> Search</button>
    </div>
    <div class="moreitemslist">
        <div class="moreitems1">
            <a href="cart.html">Cart <i class="fas fa-shopping-cart"></i></a>
        </div>
        <div class="moreitems2">
            <a href="" id="user_name">Sign In <i class="fas fa-user-circle"></i></a>

            <div class="signsub">
                <ul>
                    <li><i class="far fa-user" id="account"></i>Your Account</li>
                    <li><i class="fas fa-box-open" id="orders"></i>Your Orders</li>
                    <li><i class="far fa-heart"></i>Shortlist</li>
                    <li><i class="fas fa-hand-holding-usd"></i>SD Cash</li>
                </ul>

                <hr />

                <p>If you are a new user</p>

                <a href="signup.html">
                    <h3>Register</h3>
                </a>
                <a href="signin.html" id="login">Login</a>
                <a  id="logout">Logout</a>
            </div>
        </div>
    </div>
</nav>`
}


export const dropmenu =()=>{
    return ` 
    <ul>
      <div class="topCat">TOP CATEGORIES</div>
      <li id="list1">
        <img
          src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png"
          alt=""
        />
        <span>All Offers</span>

        <div class="sublists">
          <div class="listitems">
            <!-- 1st row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Bronzer</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>lipstic</p>
              <p>Air Conditioners</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Blush</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
            </div>
            <!-- 2nd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>fashion</p>
              <p>Socks</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>powerbank</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Mens Cloths</p>
              <p>Womens Cloths</p>
            </div>
            <!-- 3rd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
              <p>Air Conditioners</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
            </div>

            <!-- ---4th row -->
            <div id="listimg">
              <img
                src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
      <li id="list2">
        <img
          src="https://i1.sdlcdn.com/img/leftnavicon09/30x30mobile2.png"
          alt=""
        />
        <span>Mobile & Tablets</span>
        <div class="sublists">
          <div class="listitems">
            <!-- 1st row -->
            <div>
              <h4>MOBILE PHONES</h4>
              <a> <p>PowerBanks</p></a>
              <p>Feature Phones</p>

              <hr />
              <h4>MOBILE CASES & COVERS</h4>
              <p>New Launches Covers</p>
              <p>Printed Back Covers</p>
              <p>Plain Back Covers</p>
              <p>Flip Covers</p>
              <p>Premium Covers</p>

              <hr />
              <h4>TOP BRANDS</h4>
              <p>Panasonic</p>
              <p>Samsung</p>
              <p>Apple</p>
              <p>Redmi</p>
            </div>
            <!-- 2nd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
            </div>
            <!-- 3rd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
              <p>Air Conditioners</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
            </div>

            <!-- ---4th row -->
            <div id="listimg">
              <img
                src="https://n2.sdlcdn.com/imgs/i/7/q/Mobiles_17jan-197ca.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
      <li id="list3">
        <img
          src="https://n2.sdlcdn.com/imgs/d/2/c/Electronic-6212c.png"
          alt=""
        />
        <span>Electronics</span>
        <div class="sublists">
          <div class="listitems">
            <!-- 1st row -->
            <div>
              <h4>TELEVISIONS</h4>
              <p>Top Selling TVs</p>
              <p>Full HD Tvs</p>
              <p>Smart Tvs</p>
              <p>Ultra HD Tvs</p>
              <p>DTH Services</p>

              <hr />
              <h4>Speakers</h4>
              <p>Home Audio Systems</p>
              <p>Bluetooth Speakers</p>
              <p>2.0 & 2.1 Speakers</p>

              <hr />
              <h4>Headphones & Earphones</h4>
              <p>Headphones</p>
              <p>Earphones</p>
              <p>Headsets with mic</p>
              <p>iPods & MP# Players</p>
            </div>
            <!-- 2nd row -->
            <div>
              <h4>Headphones & Earphones</h4>
              <p>Headphones</p>
              <p>Earphones</p>
              <p>Headsets with mic</p>
              <p>iPods & MP# Players</p>
              <hr />
              <h4>Speakers</h4>
              <p>Home Audio Systems</p>
              <p>Bluetooth Speakers</p>
              <p>2.0 & 2.1 Speakers</p>
              <p>Full HD Tvs</p>
              <p>Smart Tvs</p>
              <p>Ultra HD Tvs</p>
              <p>DTH Services</p>
            </div>
            <!-- 3rd row -->
            <div>
              <h4>TELEVISIONS</h4>
              <p>Top Selling TVs</p>
              <p>Full HD Tvs</p>
              <p>Smart Tvs</p>
              <p>Ultra HD Tvs</p>
              <p>DTH Services</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
            </div>

            <!-- ---4th row -->
            <div id="listimg">
              <img
                src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
      <li id="list4">
        <img
          src="https://n2.sdlcdn.com/imgs/d/2/c/ComputerGaming-a02cf.png"
          alt=""
        />
        <span>Computers & Gaming</span>
        <div class="sublists">
          <div class="listitems">
            <!-- 1st row -->
            <div>
              <h4>LAPTOPS</h4>
              <p>Core i3 Laptops</p>
              <p>Core i5 Laptops</p>
              <p>Budget Laptops</p>
              <p>Thin & Light Laptops</p>

              <hr />
              <h4>PRinters & INKS</h4>
              <p>Printers</p>
              <p>Scanners</p>
              <p>Inks & Toners</p>

              <hr />
              <h4>STORAGES</h4>
              <p>External Hard Drives</p>
              <p>Memory Cards</p>
              <p>Pen Drives</p>
              <p>SSD</p>
            </div>
            <!-- 2nd row -->
            <div>
              <h4>Headphones & Earphones</h4>
              <p>Headphones</p>
              <p>Earphones</p>
              <p>Headsets with mic</p>
              <p>iPods & MP# Players</p>
              <hr />
              <h4>Speakers</h4>
              <p>Home Audio Systems</p>
              <p>Bluetooth Speakers</p>
              <p>2.0 & 2.1 Speakers</p>
              <p>Full HD Tvs</p>
              <p>Smart Tvs</p>
              <p>Ultra HD Tvs</p>
              <p>DTH Services</p>
            </div>
            <!-- 3rd row -->
            <div>
              <h4>PRinters & INKS</h4>
              <p>Printers</p>
              <p>Scanners</p>
              <p>Inks & Toners</p>
              <hr />
              <h4>STORAGES</h4>
              <p>External Hard Drives</p>
              <p>Memory Cards</p>
              <p>Pen Drives</p>
              <p>SSD</p>
            </div>

            <!-- ---4th row -->
            <div id="listimg">
              <img
                src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
      <li id="list5">
        <img
          src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
          alt=""
        />
        <span>Home & Kitchen</span>

        <div class="sublists">
          <div class="listitems">
            <!-- 1st row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
              <p>Air Conditioners</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
            </div>
            <!-- 2nd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
            </div>
            <!-- 3rd row -->
            <div>
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
              <p>Coffee & Tea Makers</p>
              <p>Hair Dryers</p>
              <p>Air Conditioners</p>
              <hr />
              <h4>AUTUMN/WINTER SPECIAL</h4>
              <p>Air Purifiers Geysers Socks</p>
              <p>Geysers</p>
              <p>Socks</p>
              <p>Air Fresheners</p>
              <p>Blankets & Comforters</p>
            </div>

            <!-- ---4th row -->
            <div id="listimg">
              <img
                src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
      <li class="moreCat"><p>MORE CATEGORIES</p></li>
      <div class="moreli">
        <li><span>Men's Fashion</span></li>
        <li><span>Women's Fashion</span></li>
        <li><span>Toys,kids Fashion & More</span></li>
        <li><span>Beauty,Health & Daily Needs</span></li>
        <li><span>Sports,Fitness & Outdoor</span></li>
        <li><span>Car & Motorbike</span></li>
        <li><span>Hobbies</span></li>
        <li><span>Books,Media & Music</span></li>
        <li><a href="">See All Categories</a></li>
      </div>
      <li class="moreCat"><p>TRENDING SEARCHES</p></li>
      <div class="moreli">
        <li>
          <span> <i class="fas fa-search"></i> Hair Straightener</span>
        </li>
        <li>
          <span> <i class="fas fa-search"></i> Makeup Kit</span>
        </li>
        <li>
          <span> <i class="fas fa-search"></i> Hookah</span>
        </li>
        <li>
          <span> <i class="fas fa-search"></i> Sling Bag</span>
        </li>
        <li>
          <span> <i class="fas fa-search"></i> Bluetooth Speaker</span>
        </li>
      </div>
    </ul>`
}