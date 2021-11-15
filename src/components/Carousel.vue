<template>
  <div class="card-carousel">
    <div class="card-img">
      <img class="current" :src="currentImage" alt="" />
      <div class="actions">
        <span @click="prevImage" class="prev"> prev </span>
        <span @click="nextImage" class="next"> next </span>
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['thumbnail-image', activeImage == index ? 'active' : '']"
        @click="activateImage(index)"
        @mouseenter="activateImage(index)"
      >
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      return this.images[this.activeImage];
    },
  },
  data() {
    return {
      // Index of the active image
      activeImage: 0,
    };
  },
  methods: {
    // Go forward on the images array
    // or go at the first image if you can't go forward
    nextImage() {
      let active = this.activeImage + 1;
      if (active >= this.images.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      let active = this.activeImage - 1;
      if (active < 0) {
        active = this.images.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
  },
  created() {
    // Check if startingImage prop was given and if the index is inside the images array bounds
    if (
      // eslint-disable-next-line operator-linebreak
      this.startingImage &&
      // eslint-disable-next-line operator-linebreak
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeImage = this.startingImage;
    }
  },
  props: ['startingImage', 'images'],
};
</script>

<style lang="scss" scoped>
.card-carousel {
  user-select: none;
  position: relative;
}

.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}

.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}

.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.card-img {
  position: relative;
  margin-bottom: 15px;
  img {
    width: 100%;
    transform: translateX(-100%);
  }
  .current {
    transition: transform 0.2s ease;
    transform: translateX(0);
  }
}

.card-img > img {
  display: block;
  margin: 0 auto;
}

.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}

.actions > span {
  cursor: pointer;
  transition: all 250ms;
}

.actions > span.prev {
  margin-left: 5px;
}

.actions > span.next {
  margin-right: 5px;
}

.actions > span:hover {
  color: #eee;
}
</style>
