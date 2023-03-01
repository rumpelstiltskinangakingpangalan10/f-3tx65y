var append = 
`<div id="upperFooter">
<div class="footerNewsletter">
   <form action="https://formsubmit.io/send/6015127b-0795-4aea-bd23-92b2fe3ce1ad" method="POST" autocomplete="off">
      <label for="txtNewsLetter" id="lblNewsLetter">
         <h1>Get More Updates <br> From Our Newsletter</h1>
      </label>
      <br>
      <input name="name" type="text" value="Newsletter" style="display: none;">
      <input name="txtNewsLetter" type="email" placeholder="Email" id="txtNewsLetter" size="12" required>
      <textarea name="comment" value="I subscribe to your newsletter." rows="20" cols="30" style="display: none;"></textarea>
      <button type="submit" id="btnNewsLetter">Subscribe</button>
   </form>
</div>
<div class="footerBlock">
   <ul>
      <li class="listTitle">
         <h3>Read More</h3>
      </li>
      <br>
      <li><a class="one" name="Shows" onclick="filterCategory(this.name)" href="#top">Shows</a></li>
      <li><a class="one" name="Movies" onclick="filterCategory(this.name)" href="#top">Movies</a></li>
      <li><a class="one" name="Games" onclick="filterCategory(this.name)" href="#top">Games</a></li>
      <li><a class="one" name="Tech" onclick="filterCategory(this.name)" href="#top">Tech</a></li>
      <li><a class="one" name="Health" onclick="filterCategory(this.name)" href="#top">Health</a></li>
   </ul>
</div>
<div class="footerBlock">
   <ul>
      <li class="listTitle">
         <h3>Support</h3>
      </li>
      <br>
      <li><a class="one" href="https://figureddit.com/privacy-policy">Privacy Policy</a></li>
      <li><a class="one" href="https://figureddit.com/terms-of-use">Terms Of Use</a></li>
      <li><a class="one" href="https://figureddit.com/contact-us">Contact Us</a></li>
   </ul>
</div>
<div class="footerBlock">
   <ul>
      <li class="listTitle">
         <h3>Links</h3>
      </li>
      <br>
      <li><a class="one" href="#">Shopee</a></li>
      <li><a class="one" href="#">Youtube</a></li>
      <li><a class="one" href="#">Facebook</a></li>
      <li><a class="one" href="#">Portfolio</a></li>
   </ul>
</div>
</div>
<div class="footerBar">
<h5>&#169; Figureddit 2023. All Rights Reserved.</h5>
</div>`

document.getElementById("footer").innerHTML = append;

