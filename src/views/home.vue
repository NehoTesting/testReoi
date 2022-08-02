<template>
  <section class="homepage">
    <div class="hp-header">
      <div class="hp-header-container" data-aos-once="true" data-aos="fade-in">
        <div class="header-text">
          <div class="hp-header-title">Hassle-free website builder</div>
          <div class="hp-header-subtitle">
            Create an amazing website with Webix in just a few minutes.
          </div>
        </div>
        <div class="hp-header-video-container">
          <video
            class="hp-header-video"
            src="@/assets/video/video.mp4"
            autoplay=""
            loop=""
            muted="muted"
            controlslist="nodownload"
          ></video>
        </div>
      </div>
    </div>
    <div class="hp-main-content" data-aos-once="true" data-aos="fade-in">
      <div class="hp-main-container">
        <div class="hp-main-content-title">
          Built for SMB's, Freelancers, and basically any type of business
          initiative there is!
        </div>
        <div
          class="hp-card-1"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="6000"
        >
          <div class="hp-card-text">
            <div class="hp-card-first-txt">
              <div class="hp-card-tag">CREATION</div>
              <div class="hp-card-title">Fast & Easy Site Creation</div>
              <div class="hp-card-pa">
                Use our simplified content-editor in order to create your
                amazing site. Drag & Drop items to the center of the page to add
                them-in, click on the pretty bin icon to remove. Use the text
                deisgn option to make every sentence stand out.
              </div>
            </div>
            <router-link class="choose pointer" :to="'/templates'">
              <div class="hp-card-btn pointer">Start Creating »</div>
            </router-link>
          </div>
          <div class="hp-card-img">
            <img
              src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607257356/homepage1_ojzkm6.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div
          class="hp-card-1"
          data="card-2"
          data-aos="fade-right"
          data-aos-duration="6000"
          data-aos-once="true"
        >
          <div class="hp-card-img">
            <img
              src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607256243/homepage2_frsgvg.png"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="hp-card-text"
            data-aos="fade-right"
            data-aos-duration="6000"
            data-aos-once="true"
          >
            <div class="hp-card-first-txt">
              <div class="hp-card-tag">DESIGN</div>
              <div class="hp-card-title">Design Like a Pro</div>
              <div class="hp-card-pa">
                Our Ready-made Palette-Picker turns the design expirence to
                become as easy as a Google search, pick your favorite palette
                and start giving life to your site!
              </div>
            </div>
            <router-link class="choose pointer" :to="'/templates'">
              <div class="hp-card-btn pointer">Let's Design »</div>
            </router-link>
          </div>
        </div>
        <div class="hp-card-1" data-aos-once="true" data-aos="fade-left">
          <div class="hp-card-text">
            <div class="hp-card-first-txt">
              <div class="hp-card-tag">COMFORT</div>
              <div class="hp-card-title">
                Add Whole Sections With One Simple Click
              </div>
              <div class="hp-card-pa">
                Why wasting time? Drag & Drop amazing sections, in a few
                seconds! Add outstanding header, navbar or even cards, to make
                your dream site become a reality!
              </div>
            </div>
            <router-link class="choose pointer" :to="'/templates'">
              <div class="hp-card-btn pointer">Learn More »</div>
            </router-link>
          </div>
          <div class="hp-card-img">
            <img class="hp-van-img"
              src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607257774/homepage3_cz0n8d.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div
          class="hp-card-1"
          data="hp-title-pa"
          data-aos="fade-up"
          data-aos-duration="6000"
          data-aos-once="true"
        >
          <div class="hp-card-text">
            <div class="hp-card-title">
              Your Dream Site Is Just A Few Clicks Away...!
            </div>
            <div class="hp-card-pa">
              Webix was built for freelancers, SMB's, and basically anyone who
              has a dream about an amazing website that is waiting to
              come-alive!
            </div>
            <router-link class="choose pointer" :to="'/templates'">
              <div class="hp-card-btn pointer">Start Creating Now »</div>
            </router-link>
          </div>
        </div>
        <div class="hp-big-img" data-aos-once="true" data-aos="zoom-in">
          <img
            src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607258094/homepage4_xdifqx.png"
            alt=""
            srcset=""
          />
        </div>
        <div
          class="hp-card-1"
          data="hp-title-templates"
          data-aos="fade-in"
          data-aos-duration="6000"
          data-aos-once="true"
        >
          <div class="hp-card-text">
            <div class="hp-card-title">Outstanding Templates</div>
            <div class="hp-card-pa">
              Make your brand standout with our amazing tempaltes.
            </div>
          </div>
        </div>
        <div
          class="hp-template-previews-list"
          data-aos="fade-in"
          data-aos-duration="6000"
          data-aos-once="true"
        >
          <span
            class="hp-template-preview"
            @click="goToPreview('sys64364944')"
          >
            <div class="hp-template-name">
              <img class="dots" src="@/assets/dots.png" />
            </div>
            <div class="template-img">
              <img
                class="dots"
                src="https://res.cloudinary.com/dksmeovlj/image/upload/v1606994532/screencapture-localhost-8081-2020-11-29-13-55-25_3_s4wxab.jpg"
              />
            </div>
          </span>
          <span class="hp-template-preview" @click="goToPreview('sys643643444')">
            <div class="hp-template-name">
              <img class="dots" src="@/assets/dots.png" />
            </div>
            <div class="template-img">
              <img
                class="dots"
                src="https://res.cloudinary.com/dksmeovlj/image/upload/v1607014236/screencapture-localhost-8081-2020-11-29-13-55-25_6_agsaem.jpg"
              />
            </div>
          </span>
          <span
            class="hp-template-preview"
            @click="goToPreview('sys587486458')"
          >
            <div class="hp-template-name">
              <img class="dots" src="@/assets/dots.png" />
            </div>
            <div class="template-img">
              <img
                class="dots"
                src="https://i.ibb.co/Wk3pMvW/template-preview.jpg"
              />
            </div>
          </span>
        </div>
        <div class="hp-footer">
          <div class="hp-footer-left">
            <div class="hp-footer-icons">
              <span>Connect With Us</span>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-behance"></i></a>
            </div>
          </div>
          <div class="hp-footer-right">
            <div class="hp-footer-txt">
              <ul>
                <li><router-link to="/templates">Templates</router-link></li>
                <li><router-link to="/editor">Editor</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'homepage',
  components: {},
  data() {
    return {};
  },
  methods: {
    goToPreview(id) {
      window.scrollTo(0, 0);
      this.$store.commit({ type: 'setPreviewMode', isPreviewOn: true });
      this.$router.push('/' + id);
    },
  },
  computed: {},
  created() {
    this.$store.commit({ type: 'setFixedHeader', isFixed: true });
  },
  destroyed() {
    this.$store.commit({ type: 'setFixedHeader', isFixed: false });
  },
};
</script>

<style lang="css">
#app .main-nav {
  border-bottom: 0 !important;
}
</style>