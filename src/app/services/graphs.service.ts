import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import axios from 'axios'  
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {
  @ViewChild("lineCanvas") lineCanvas: any;
  private lineChart: Chart;
 
  constructor() { }

}
