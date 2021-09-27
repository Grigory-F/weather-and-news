<template>
  <div class="grid-layout__weather weather">
        <div class="weather__wrap-main weather-main">
          <div class="weather-main__container-signs">
            <div class="weather-main__inner-signs">
              <div class="weather-main__box-geo">
                <Icons
                  name="geo"
                  class="weather-main__geo-icon ui-icon"
                ></Icons>
                <span class="weather-main__sign-geo subtitle-main">{{ positionCity.city }}</span>
              </div>
              <div class="weather-main__box-header">
                <h1 class="weather-main__header-sign title-main">
                  Feels like
                  {{ (weather.main.feels_like - 273.15).toFixed(1) }}°C
                </h1>
              </div>
              <div class="weather-main__box-condition">
                <span class="weather-main__condition-sign subtitle-main">{{
                  weather.weather[0].main
                }}</span>
                <Icons name="sunny" class="weather-main__geo-icon"></Icons>
              </div>
            </div>
          </div>
        </div>
        <div class="weather__footer weather-footer">
          <div class="weather-footer__wrap-indocators">
            <div class="weather-footer__box-indocator">
              <span class="weather-footer__sign-indicator">VISABILITY</span>
              <p class="weather-footer__sign-value-indicator subtitle-second">
                {{ weather.visibility }} km
              </p>
            </div>
            <div class="weather-footer__box-indocator">
              <span class="weather-footer__sign-indicator">HUMIDITY</span>
              <p class="weather-footer__sign-value-indicator subtitle-second">
                {{ weather.main.humidity }} %
              </p>
            </div>
            <div class="weather-footer__box-indocator">
              <span class="weather-footer__sign-indicator">WIND SPEED</span>
              <p class="weather-footer__sign-value-indicator subtitle-second">
                {{ weather.wind.speed }} m/s
              </p>
            </div>
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
        weather: Object,
        positionCity: Object,
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_core.scss';
.weather {
  display: flex;
  flex-direction: column;
  &__wrap-main {
  }

  &__footer {
  }
}
.weather-main {
  flex: 1;
  &__container-signs {
    display: flex;
    height: 100%;
    padding: 0 60px;
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
    }
  }

  &__sign-geo {
    color: $font-color-second;
  }

  &__box-header {
  }

  &__header-sign {
    margin: 0;
  }

  &__box-condition {
    display: flex;
    align-items: center;
  }

  &__condition-sign {
    color: $font-color-main;
    margin-right: 5px;
  }
}
.weather-footer {
  padding: 55px 60px;
  background: rgba(179, 168, 168, 0.15);
  backdrop-filter: blur(5px);
  &__wrap-indocators {
    margin: auto -15px auto 0;
    display: flex;
  }

  &__box-indocator {
    margin-right: 35px;
  }

  &__sign-indicator {
    color: $font-color-second;
    white-space: nowrap;
    letter-spacing: 5px;
    font-size: 18px;
  }

  &__sign-value-indicator {
    margin: 0;
    color: $font-color-main;
    white-space: nowrap;
    font-weight: 700;
  }
}
@media (max-width: 768px) {
  
  .weather-main {
    flex: 1;
    &__container-signs {
      padding: 20px;
    }

    &__inner-signs {
      margin: auto 0;
    }

    &__box-geo {
    }

    &__geo-icon {
      display: flex;

      margin-right: 5px;
      & > svg {
      }
    }

    &__sign-geo {
    }

    &__box-header {
    }

    &__header-sign {
    }

    &__box-condition {
    }

    &__condition-sign {
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
  .weather-main {
    flex: 1;
    &__container-signs {
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
      }
    }

    &__sign-geo {

    }

    &__box-header {
    }

    &__header-sign {

    }

    &__box-condition {
    }

    &__condition-sign {

    }
  }
  .weather-footer {
    padding: 10px 20px;
    &__wrap-indocators {
    }

    &__box-indocator {
    }

    &__sign-indicator {
      @include calculate-size(font-size, 16, 14, 480)
    }

    &__sign-value-indicator {
    }
  }
}
</style>