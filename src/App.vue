<template>
  <div id="app">
    <div class="wrap-bg-video">
      <video loop autoplay muted class="wrap-bg-video__video">
        <source
          type="video/mp4"
          :src="getVideoUrl(weather.weather[0].main.toLowerCase())"
        />
      </video>
    </div>
    <div class="grid-layout">
      <Weather :weather="weather" :positionCity="position"></Weather>
      <News :news="news"></News>
      
    </div>
    <Preloader :isLoading="loadingData"></Preloader>
  </div>
</template>

<script>
import Weather from "@/components/Weather.vue";
import News from "@/components/News.vue";
import Preloader from '@/components/Preloader.vue'

export default {
  components: {
    Weather,
    News,
    Preloader,
  },
  data() {
    return {
      position: {},
      weather: {},
      news: {},
      loadingData: false,
    };
  },
  methods: {
    async checkPos() {
      try {
        this.loadingData = true;
        const fetchPosition = await fetch(
          "https://ipinfo.io?token=f93cf72acdf691"
        );
        const positionCoords = await fetchPosition.json();
        this.position = { ...positionCoords };
        const fethWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            positionCoords.city
          },${positionCoords.country.toLowerCase()}&APPID=b13f4a4f7cd591a462a291818031dee7`
        );
        const weatherValue = await fethWeather.json();
        this.weather = { ...weatherValue };

        const fetchNews = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${positionCoords.country.toLowerCase()}&apiKey=e7dc70452cbf4981974c40f27010cc02`
        );
        const newsValue = await fetchNews.json();
        this.news = { ...newsValue.articles };
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingData = false
      }
    },
    getVideoUrl(nameVideo) {
      return require(`./assets/${nameVideo}.mp4`);
    },
  },
  mounted() {
    this.checkPos();
  },
  created() {},
};
</script>



<style lang="scss">
#app {
  font-family: $fonts-progect;
  position: relative;
  overflow: hidden;
}
body {
  margin: 0;
}

.grid-layout {
  display: grid;
  grid-template-columns: 3fr minmax(500px, 2fr);
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  &__weather {
    height: 100vh;
    z-index: 10;
  }

  &__news {
    height: 100vh;
    z-index: 10;
  }
}

.wrap-bg-video {
  position: absolute;
  width: 100%;
  height: 100%;

  &__video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }

  &__sign-header {
    font-size: 28px;
    color: $font-color-main;
    margin: 0;
  }

  &__wrap-news {
    padding: 0 20px;
    overflow-y: scroll;
    box-sizing: border-box;
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






@media (max-width: 1200px) {
  .grid-layout {
    grid-template-columns: 1fr minmax(300px, 35%);
  }
}
@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
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

  .weather-main {
    flex: 1;
    &__container-signs {
      display: flex;
      height: 100%;
      padding: 30px;
    }

    &__inner-signs {
      margin: auto 0;
    }

    &__box-geo {
      display: flex;
      align-items: center;
    }

    &__geo-icon {
      display: flex;

      margin-right: 5px;
      & > svg {
        width: 15px;
      }
    }

    &__sign-geo {
      font-size: 32px;
    }

    &__box-header {
    }

    &__header-sign {
      font-size: 48px;
    }

    &__box-condition {
    }

    &__condition-sign {
      font-size: 32px;
    }
  }
  .weather-footer {
    padding: 30px;
    &__wrap-indocators {
      flex-wrap: wrap;
      margin-bottom: -20px;
    }

    &__box-indocator {
      margin-right: 20px;
      margin-bottom: 20px;
    }

    &__sign-indicator {
      font-size: 16px;
    }

    &__sign-value-indicator {
      font-size: 28px;
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

  .weather-main {
    flex: 1;
    &__container-signs {
      display: flex;
      height: 100%;
      padding: 10px 20px;
    }

    &__inner-signs {
      margin: auto 0;
    }

    &__box-geo {
      display: flex;
      align-items: center;
    }

    &__geo-icon {
      display: flex;

      margin-right: 5px;
      & > svg {
        width: 15px;
      }
    }

    &__sign-geo {
      @include calculate-size(font-size, 32, 24, 480)
    }

    &__box-header {
    }

    &__header-sign {
      @include calculate-size(font-size, 48, 32, 480)
    }

    &__box-condition {
    }

    &__condition-sign {
      @include calculate-size(font-size, 32, 24, 480)
    }
  }
  .weather-footer {
    padding: 10px 20px;
    &__wrap-indocators {
      flex-wrap: wrap;
      margin-bottom: -20px;
    }

    &__box-indocator {
      margin-right: 20px;
      margin-bottom: 20px;
    }

    &__sign-indicator {
      @include calculate-size(font-size, 16, 14, 480)
    }

    &__sign-value-indicator {
      @include calculate-size(font-size, 28, 24, 480)
    }
  }
}
</style>
