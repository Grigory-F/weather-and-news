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
@import '@/assets/styles/_normalize.scss';
@import '@/assets/styles/_fonts.scss';
#app {
  font-family: $fonts-progect;
  position: relative;
  overflow: hidden;
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


@media (max-width: 1200px) {
  .grid-layout {
    grid-template-columns: 1fr minmax(300px, 35%);
  }
}
@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
 
}


.title-main {
    font-size: 64px;
    color: $font-color-main;
}

.subtitle-main {
    font-size: 48px;
}

.subtitle-second {
    font-size: 36px;
}

.ui-icon {
    & > svg {
        width: 30px;
    }
}

@media (max-width: 768px) {
    .title-main {
        font-size: 48px;
    }
    
    .subtitle-main {
        font-size: 32px;
    }
    .ui-icon {
        & > svg {
            width: 25px;
        }
    }
}

@media (max-width: 480px) {
    .title-main {
        @include calculate-size(font-size, 48, 36, 480)
    }
    
    .subtitle-main {
        @include calculate-size(font-size, 32, 24, 480)
    }
    .subtitle-second {
        @include calculate-size(font-size, 28, 24, 480)
    }
    .ui-icon {
        & > svg {
            width: 20px;
        }
    }
}
</style>
