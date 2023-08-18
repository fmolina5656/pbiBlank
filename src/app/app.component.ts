import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  IReportEmbedConfiguration,
  models,
  Page,
  Report,
  service,
  VisualDescriptor,
} from 'powerbi-client';
import { PbiService } from './services/pbi.service';

export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    token: string;
  };
}
const reportUrl = 'https://tokenpbi.azurewebsites.net/api/PBI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pbiBlank';
  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  };

  constructor(private service: PbiService) {}

  async ngOnInit() {
    let reportConfigResponse: any;

    //armar objeto con la data para el reporte
    const data = {
      workspace: 'bfa09c84-6514-4c16-858b-ddf8a079cdf8',
      report: '8a1b6167-71d5-451c-b740-90dbe3251e64',
    };
    reportConfigResponse = await this.service
      .postEmbedConfig(reportUrl, data)
      .toPromise();

    this.reportConfig = {
      embedUrl: reportConfigResponse.embedUrl,
      accessToken: reportConfigResponse.embedToken.token,
    };
  }
}
