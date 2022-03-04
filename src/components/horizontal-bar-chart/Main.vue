<template>
  <Chart
    type="bar"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
  />
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import { useColorSchemeStore } from "@/stores/color-scheme";
import { colors } from "@/utils/colors";

const props = defineProps({
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
});

const darkMode = computed(() => useDarkModeStore().darkMode);
const colorScheme = computed(() => useColorSchemeStore().colorScheme);

const data = computed(() => {
  return {
    // labels: ["Accessories", "Utilities", "Home & Mortgate", "Furnitures", "Office Supply", "Advertising & Marketting", "Website & Software", "Miscellenous"],
    // labels: [
    //   'Policy Research',
    //   'Free Trade Agreements',
    //   'Trade in Goods',
    //   'Trade in Services',
    //   'TRIPS / Rules',
    //   'Adminstrative Department',
    //   'Finance'
    // ],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    
    datasets: [
      {
        label: "Used Balance",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [0, 200, 250, 200, 500, 450, 850, 1050, 1000, 500, 100, 100],
        backgroundColor: colorScheme.value ? colors.primary() : "",
      }
    ],
  };
});

const options = computed(() => {
  return {
    legend: {
      labels: {
        fontColor: colors.slate["500"](0.8),
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: "12",
            fontColor: colors.slate["500"](0.8)
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: "12",
            fontColor: colors.slate["500"](0.8),
            callback: function (value) {
              return "₦" + value;
            },
          },
          gridLines: {
            color: darkMode.value
              ? colors.slate["500"](0.3)
              : colors.slate["300"](),
            zeroLineColor: darkMode.value
              ? colors.slate["500"](0.3)
              : colors.slate["300"](),
            borderDash: [2, 2],
            zeroLineBorderDash: [2, 2],
            drawBorder: false,
          },
        },
      ],
    },
  };
});
</script>
