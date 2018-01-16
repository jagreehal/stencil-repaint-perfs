import { Component, State } from '@stencil/core';

declare var ENV: any;
declare var Monitoring: any;
@Component({
  tag: 'db-mon'
})
export class DbMon {
  @State() databases: any[] = [];

  loadSamples() {
    this.databases = (ENV as any).generateData().toArray();
    Monitoring.renderRate.ping();

    setTimeout(() => {
      this.loadSamples();
    }, ENV.timeout);
  }

  componentDidLoad() {
    this.loadSamples();
  }
  render() {
    return (
      <div>
        <table class="table table-striped latest-data">
          <tbody>
            {this.databases.map(database => {
              return (
                <tr>
                  <td class="dbname">{database.dbname}</td>
                  <td class="query-count">
                    <span class={database.lastSample.countClassName}>
                      {database.lastSample.nbQueries}
                    </span>
                  </td>
                  {database.lastSample.topFiveQueries.map(query => {
                    return (
                      <td class={'Query ' + query.elapsedClassName}>
                        {query.formatElapsed}
                        <div class="popover left">
                          <div class="popover-content">{query.query}</div>
                          <div class="arrow" />
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
