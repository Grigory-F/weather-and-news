<template>
  <div class="grid-layout__news news-layout">
    <div class="news-layout__inner-header">
      <div @click="showExpNews = false">
        <Icons name="arrow" class="news-layout__arrow-icon" :class="{'news-layout__arrow-icon--show':showExpNews}"></Icons>
      </div>

      <p class="news-layout__sign-header" :class="{'news-layout__sign-header--show':showExpNews}">News Feed</p>
    </div>
    <div class="news-layout__wrap-news">
      <div
        v-for="newsItem in news"
        :key="newsItem.url"
        class="news-layout__box-news-item news-item"
        @click="expandNews(newsItem)"
      >
        <div class="news-item__picture">
          <img :src="newsItem.urlToImage" :alt="newsItem.title" />
        </div>
        <div class="news-item__container-main">
          <div class="news-item__inner-headers">
            <span class="news-item__sourse">{{ newsItem.source.name }}</span>
            <span class="news-item__date-pulished">{{
              newsItem.publishedAt.substr(0, 10)
            }}</span>
          </div>
          <div class="news-item__title">
            <p class="news-item__sign-title">
              {{ newsItem.description }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="news-layout__exp-news expanded-news"
        :class="{ 'expanded-news--show': showExpNews }"
      >
        <div class="expanded-news__picture">
          <img :src="expNews.urlToImage" :alt="expNews.title" />
        </div>
        <h3 class="expanded-news__title">{{ expNews.title }}</h3>
        <p class="expanded-news__subtitle">{{ expNews.description }}</p>
        <p class="expanded-news__content">{{ expNews.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from "@/components/Icons.vue";
export default {
  components: {
    Icons,
  },
  props: {
    news: Object,
  },
  data() {
    return {
      showExpNews: false,
      expNews: {},
    };
  },
  methods: {
    expandNews(newsItem) {
      console.log(newsItem);
      this.showExpNews = true;
      this.expNews = { ...newsItem };
    },
    show() {
      this.showExpNews = false;
      console.log(this.showExpNews);
    },
  },
};
</script>

<style lang="scss">
.news-layout {
  &__exp-news {
  }
}
.expanded-news {
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  width: 100%;
  padding: 20px 30px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  transition: 0.4s ease;
  box-sizing: border-box;
  &--show {
    left: 0%;
    opacity: 1;
  }
  &__picture {
    width: 100%;
    height: 200px;
    position: relative;
    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 24px;
    color: $font-color-main;
  }

  &__subtitle {
    font-size: 14px;
    color: $font-color-second;
  }

  &__content {
    color: $font-color-main;
  }
}

.news-layout {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  &__inner-header {
    padding: 20px 20px;
    display: flex;
    align-items: center;
  }

  &__arrow-icon {
    width: 25px;
    cursor: pointer;
    transform: translate(10px, 0);
    opacity: 0;
    transition: 0.3s ease;
    &--show {
      width: 20px;
      transform: translate(0px, 0);
    opacity: 1;
    }
  }

  &__sign-header {
    font-size: 28px;
    color: $font-color-main;
    margin: 0;
    transition: 0.3s ease;
    transform: translate(-25px, 0);
    &--show {
      transform: translate(15px, 0);
    }
  }

  &__wrap-news {
    padding: 0 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
  }

  &__box-news-item {
  }
}

.news-item {
  height: 260px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  &__picture {
    width: 100%;
    height: 130px;
    position: relative;
    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__container-main {
    padding: 10px 20px;
    overflow: hidden;
    flex: 1;
  }

  &__inner-headers {
    display: flex;
    justify-content: space-between;
    color: $font-color-second;
    font-size: 16px;
  }

  &__sourse {
    color: $font-color-second;
    font-weight: 700;
    white-space: nowrap;
    font-size: 16px;
  }

  &__date-pulished {
  }

  &__title {
    margin-top: 5px;
  }

  &__sign-title {
    margin: 0;
    color: $font-color-main;
  }
}

@media (max-width: 1024px) {
  .news-layout {
    &__inner-header {
    }

    &__arrow-icon {
    }

    &__sign-header {
      font-size: 32px;
    }

    &__wrap-news {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__box-news-item {
    }
  }
  .news-item {
    flex: 1 1 350px;
    margin: 0;
    &__picture {
      & > img {
      }
    }

    &__container-main {
    }

    &__inner-headers {
    }

    &__sourse {
    }

    &__date-pulished {
    }

    &__title {
    }

    &__sign-title {
    }
  }
}

@media (max-width: 768px) {
  .news-layout {
    &__inner-header {
    }

    &__arrow-icon {
    }

    &__sign-header {
    }

    &__wrap-news {
      display: flex;

      gap: 20px;
    }

    &__box-news-item {
    }
  }
  .news-item {
    flex: 1 1 350px;
    margin: 0;
    &__picture {
      & > img {
      }
    }

    &__container-main {
    }

    &__inner-headers {
    }

    &__sourse {
    }

    &__date-pulished {
    }

    &__title {
    }

    &__sign-title {
    }
  }
}
@media (max-width: 480px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  .news-layout {
    &__inner-header {
    }

    &__arrow-icon {
    }

    &__sign-header {
    }

    &__wrap-news {
      display: flex;

      gap: 20px;
    }

    &__box-news-item {
    }
  }
  .news-item {
    flex: 1 1 350px;
    margin: 0;
    &__picture {
      & > img {
      }
    }

    &__container-main {
    }

    &__inner-headers {
    }

    &__sourse {
    }

    &__date-pulished {
    }

    &__title {
    }

    &__sign-title {
    }
  }
}
</style>