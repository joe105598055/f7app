<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar title="營運"></f7-navbar>

    <f7-subnavbar>
      <f7-segmented raised>
        <!-- <f7-button :active="currentDuration=='今日'" @click="chooseToday">今日</f7-button>
        <f7-button :active="currentDuration=='近七日'" @click="chooseWeek">近七日</f7-button>
        <f7-button :active="currentDuration=='本月'" @click="chooseMonth">本月</f7-button>-->
        <div id="reportrange" style="width: 100%">
          <f7-icon f7="calendar"></f7-icon>
          <span></span>
        </div>
      </f7-segmented>
    </f7-subnavbar>

    <f7-card style="text-align: center;font-size: xx-large;" title="總營業額" content="$5600"></f7-card>
    <f7-card style="text-align: center;font-size: xx-large;" title="現金收入" content="$4200"></f7-card>
    <f7-card style="text-align: center;font-size: xx-large;" title="信用卡收入" content="$1000"></f7-card>
    <div class="card">
      <div class="card-header">
        <!-- <div
          id="reportrange"
          style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%"
        >
          <f7-icon f7="calendar"></f7-icon>
          <span></span>
        </div>-->
      </div>
      <div class="card-content">
        <div id="myChart"></div>
      </div>
      <div class="card-footer">Footer</div>
    </div>
  </f7-page>
</template>
<script>
import Highcharts from "highcharts";
import $ from "jquery";
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
    var calendarRange = this.$f7.calendar.create({
      inputEl: "#demo-calendar-range",
      dateFormat: "M dd yyyy",
      rangePicker: true,
      openIn: "customModal",
      closeOnSelect: true
    });
    setTimeout(() => {
      $("li:contains('自訂')").click(() => {
        console.log(`自訂`);
        calendarRange.open();
      });
    }, 500);
    $("#reportrange").click(() => {
      console.log($('div.daterangepicke.ltr.show-ranges.opensleft').css('display'))
    });
    calendarRange.on("close", function(calendar) {
      console.log(`[close]`);
      console.log(moment(calendar.getValue()[0]).format("MMMM D, YYYY"));
      $("#reportrange span").html(
        moment(calendar.getValue()[0]).format("MMMM D, YYYY") +
          " - " +
          moment(calendar.getValue()[1]).format("MMMM D, YYYY")
      );
    });

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
$(function() {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    if (this && this.chosenLabel && this.chosenLabel == "自訂") {
      $("#reportrange span").html("");
      return;
    }
    $("#reportrange span").html(
      start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
    );
  }

  $("#reportrange").daterangepicker(
    {
      startDate: start,
      endDate: end,
      showDropdowns: true,
      showCustomRangeLabel: false,
      backdrop: false,
      closeByBackdropClick: false,
      opens: "left",
      drops: "down",
      ranges: {
        今日: [moment(), moment()],
        昨天: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        最近七天: [moment().subtract(6, "days"), moment()],
        最近三十天: [moment().subtract(29, "days"), moment()],
        這個月: [moment().startOf("month"), moment().endOf("month")],
        上個月: [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ],
        自訂: [moment(), moment()]
      }
    },
    cb
  );

  cb(start, end);
});
</script>
<style>
.daterangepicker {
  z-index: 9999;
}
</style>

