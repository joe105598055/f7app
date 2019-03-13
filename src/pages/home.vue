<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar title="總覽"></f7-navbar>

    <f7-subnavbar>
      <f7-segmented raised>
        <f7-button :active="currentDuration=='今日'" @click="chooseToday">今日</f7-button>
        <f7-button :active="currentDuration=='近七日'" @click="chooseWeek">近七日</f7-button>
        <f7-button :active="currentDuration=='本月'" @click="chooseMonth">本月</f7-button>
      </f7-segmented>
    </f7-subnavbar>

    <f7-card style="text-align: center;font-size: xx-large;" title="總營業額" content="$5600"></f7-card>
    <f7-card style="text-align: center;font-size: xx-large;" title="現金收入" content="$4200"></f7-card>
    <f7-card style="text-align: center;font-size: xx-large;" title="信用卡收入" content="$1000"></f7-card>
    <f7-block>
      <div id="myChart"></div>
    </f7-block>
<!-- 
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item class="item-link" title="Dynamic (Component) Route" @click="routeTo"></f7-list-item>
      <f7-list-item title="Default Route (404)" link="/load-something-that-doesnt-exist/"></f7-list-item>
      <f7-list-item title="Request Data & Load" link="/request-and-load/user/123456/"></f7-list-item>
    </f7-list> -->
  </f7-page>
</template>
<script>
import Highcharts from "highcharts";
export default {
  data() {
    return {
      currentDuration: "今日"
    };
  },
  methods: {
    routeTo() {
      this.$f7router.navigate(
        "/dynamic-route/blog/45/post/125/?foo=bar#about",
        { context: "122" }
      );
    },
    chooseToday() {
      console.log(`chooseToday`);
      this.currentDuration = "今日";
    },
    chooseWeek() {
      console.log(`chooseWeek`);
      this.currentDuration = "近七日";
    },
    chooseMonth() {
      console.log(`chooseMonth`);
      this.currentDuration = "本月";
    }
  },
  mounted() {
    Highcharts.chart("myChart", {
      title: {
        text: "營業額與訂單"
      },
      // subtitle: {
      //   text: "Source: thesolarfoundation.com"
      // },
      yAxis: {
        title: {
          text: "Number of Employees"
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      series: [
        {
          name: "Line 1",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        },
        {
          name: "Line 2",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    });
  }
};
</script>