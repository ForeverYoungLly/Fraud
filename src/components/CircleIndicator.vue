<template>
    <div class="circle-indicator">
        <svg viewBox="0 0 36 36">
            <path class="circle-background" d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path :stroke="circleColor" class="circle-progress" :d="circlePath" />
            <text x="8" y="15" style="font-size: 0.3em;">可疑程度</text>
            <text x="18" y="22" class="percentage">{{ percentage }}%</text>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        score: {
            type: Number,
            required: true
        }
    },
    computed: {
        percentage() {
            return Math.round((this.score / 10) * 100);
        },
        circleColor() {
            const red = Math.round((this.score / 10) * 255);
            const green = 255 - red;
            return `rgb(${red}, ${green}, 0)`;
        },
        circlePath() {
            const radius = 15.9155;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (this.percentage / 100) * circumference;
            return `
          M 18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831
          stroke-dasharray: ${circumference};
          stroke-dashoffset: ${offset};
        `;
        }
    }
};
</script>

<style scoped>
.circle-indicator {
    width: 100px;
    height: 100px;
}

svg {
    width: 100%;
    height: 100%;
}

.circle-background {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
}

.circle-progress {
    fill: none;
    stroke-width: 3.8;
    stroke-linecap: round;
    transition: stroke 0.3s ease, stroke-dashoffset 0.3s ease;
}

.percentage {
    fill: #333;
    font-size: 0.5em;
    font-weight: bold;
    text-anchor: middle;
    dominant-baseline: middle;
}
</style>