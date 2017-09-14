<template>
    <div id="app">
        <div id="infomation">
            <div id="current-weather">
                <current-weather></current-weather>
            </div>

            <div id="forecast">
        
            </div>

        </div>
        <div id="map">
      
        </div>
    </div>
</template>

<script>
    import CurrentWeather from './components/CurrentWeather'
    export default {
        name: 'app',
        components: {
            CurrentWeather
        }
    }
</script>

<style>
    body {
        background-color: #fafafa;
    }

    #app {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1000px;
        height: 600px;
        margin-top: -300px;
        margin-left: -500px;
        border-radius: 3px;
        background-color: #444;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
    #app:after {
        content: '';
        display: block;
        clear: both;
    }
    #app > #infomation {
        float: left;
        width: 600px;
    }
    #app > #infomation > #current-weather {
        background-color: #00f;
        height: 200px;
    }
    #app > #infomation > #forecast {
        background-color: #f00;
        height: 400px;
    }
    #app > #map {
        float: right;
        width: 400px;
        height: 600px;
        background-color: #0f0;
    }
</style>
