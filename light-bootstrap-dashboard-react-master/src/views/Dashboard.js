import ChartistGraph from "react-chartist";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Use 'chart.js/auto' for Chart.js version 3.x

import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Earnings',
            data: [1000, 1200, 800, 1500, 1100, 900, 1300, 1400, 1600, 2000, 1800, 1200],
            backgroundColor: 'rgba(150, 111, 214, 0.5)', // Light purple color
            borderColor: 'rgba(150, 111, 214, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  const tableData = [
    {
      productImage: 'data:image/jpeg;base64,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',
      productName: 'Product 1',
      stack: 10,
      price: 20,
      totalSales: 200,
    },
    {
      productImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC1CAMAAACtbCCJAAABRFBMVEX////m5ubl5eVUbnrk5OT/t01BQkLz8/Pj4+P19fXw8PDr6+v09PT7+/v4+Pjt7e3/nAzTLi1WZ2//vU57Sx48QEJpVj88PT03PUL/pSn/tkn/pCX/lgBvcHJCREY2NzfRHB7mo0RJZnNBX2z33NEoNkExMzndn0f/tD9idn8+W2iYpatNcH2eoqUqKyzT1tdLRT+bdEL2sEpXSDptPhiHaUL0yKD/9u//rzD9u2f6wXb/qzf8nir84Mb+xYv7r1yIk5n9ypj+rE6psbXdamJ1hIzdZ1fDyMrSHRP55+XopaXQAADsuLnmn5TYRjV1YWaqSEm4Pz0ZHB97fX5RWV64u75zdHS0eCvakTDw1sDrjyWLWiabZir817WkeUDGiTetdS+UUiC9dDNmPyDYiDzq2sn4woDYUlLdcHHHNzmKWFyVU1XcG+4oAAASk0lEQVR4nO1d+3/Tth61Hfc6fsWB0pU2Kx0NhbbQZhsdAUrXlq4Le8EGdIw7etndg213///vV5ItR7IelmTHSQF9PvvskDTJ0dHr6PW1ZYEUObbtQuBj0IEgzoDTASB2M2BB4GMQYeBBYAMQYJBAEBLADiFInAwEANgYOBB4JTxikkdM8fApHg7JIzDgYb2XxVgWis47JIvrOG1EB4MOAG7KggRIljYAPgYRBikdAFI6AKQswEs5SOmAL0pZkACJ4HF5cAjlPFhCiIdL8mAJ5TxYQqksruU1maJGf61CQgUsLukMiIUNcHEKSjqmSppfwHSNcyU8qte4NsuDW+NshX4hb4YJ2QxzkNKpq3+q3C8Uefgkj7R4SsaR97KIZHFdt51WXgBSOgBkbcd1QwokAKQs2q7rYJA2Igx8DDoYxBDEGKR1lgQRBgIeALgJn0eiw6NTwsOneJADtItL2sUKYwCFdbGwrqikHVzSDi5gEuCSdnABj4Goxol5xBQPX8wjEPMIGR6qvoWkU8m3EHQMfYtbi29R4lEqy7vschu1c47m4OrGDKG0eDTtHIeH2M75IHkBSDmISBDxgQf/WhsE7I+NQRQVwXR4ICC1cy4Bqti5NtdG5QWMXoEWGFVdL8pAzoMi9G7YOTsMvMFo+3Dl+RWQFkCC/1/dtt5tOzfYXnm6s7q6uLj4LyItXo9n0c65zdi5cPvKziqlB06wuuQ8ZHaOJFS7nbMzzX0IkLAUQMJSwM+qlY1GIlhkuMbZuIDHIK1xeUljMFjZWeVJgtJOwCFUxsNmeNhcHjShAOc+B56dyqJo51wD38Jzl/DH2893uPUkry5JCQ9N3yJ1uTOyOpdYh09lokBdwhIeDdu5bC4itnOump1zxHYuGF0RNx+id1G0c67Uzjmlds7h27kOa2giDHwKRAyAFqlDg04GAhHobO+UiQLS4gBo4PMJ8Xn4fB5lhLwimIadA+CZiiqg1326sj1AhHg8XAM7R/GYLTtne89LG1BeYVZ3np++G3YuuVLS1zLKHHvhFO2cA5C6nXPN7JwTPtdSBabVhdNAZOeCSdo5zw5DZJp8BnQg6JAghsDHILVRAGQ1LsTuiQCZe0JgRbkFEWnnWfpjNfJIQWbnCFBi5+SLluXL04JFy0MTVUCFeQ49KWfRktsA9O2cY2Tn6lqdC0ZqYxCbFlfb4VTsXLbEXbRzAhvlY8DYOY57wsC2rxuqAtL1tq1l5xwDO+eM7VwHJC8BCYIIAx8Cnws6EEQYeGIQQBAQwF/R7m6J+nLF4xAy4sEBCSWDl/DsHOOe+Daq1M61C3bu1LQJobT6I5+HW2rn2lI71562nbtcRRUwHo2Ct9HObZuNQkR9adbOuVXsnKtq5+JKTQjJcpiI7RzMRwkPHTsXg+SFIEHgU6ADQIcCPnyPAhEGHgYBBRIAEgiiypUFLtlZYx4dbR40oYAEIQU8pH0je9CeXs9yef1jdtiCazCadk5zD7pxO3eqUVkur//rkxvzV6+zb5wrOwdH6zI7p+xZQD0BmszPzXF02RlJ7ZzLtZUBxUPJzjnQzsXQx4TYzoXYzuUgdXEhCSIMoGmKEYgBQO6JB+LwqaImi5/cmAOawMTqsvjMKiWEf1VAKCBBQgFvDAg75+rZOVdk5xj3BIB9XN6GFpAm85kmfF12AnU719a0c+3m7ZxfusyStx0yMbqsjmhC59zOhXLTQrUdmS6r20Ezsky4EaXAHonbENt2JLosPouEjcitsxFRdi7C5s1nAG2jWPfkid1TIDH+3LZT0GWB+PsrFmPnZIQSLiHWztG+Dts519TOuYp2jj88I014bUdcX66jVpvzYP2l/pHCxORIYT127oqgP5HVE64uO7AzafyGyIRqS1LocRdK246oHa2O7LprC/cAaknfwk4V6SmaUt9iDShZtDQp6LJ6HChOFSWEFPqWSSwsOIWFBdLMKbcdfjtKd+xlCwtuzsOpsLDQhG8J8UCkXU8YXVYPS/uFc2PnksNsIDLTJNUl/YrFk2ZkMV7i1pgTJc9QnhY+MNQE6fIB6l4Wf2R4TGSJW7Ihwt8ZMdgQsX6sURafy0NCKBDvjCTCDRGYJr59tlKfLCuBwnpL9e0zJEv5ZkY1O1erLOfAziluzdcsSwNrudjO2WjB3yYBcnEUQO6JBMhGwQMUoQe+CU3jAgog91SrLF5GiOURl/AgCJEAuTgKpHau0rEfhX2iTlKnLAyPiewTNeJbapfl7bBz50+WEjsnOfipfmJhAo2ovgOoqnbOJwF7nETpXAl9iqTWLrejc76l5FgLDXh2TnC4/VzZuRoPtyNZJmvngrMX63XJsv7iLJxi/JaqJy3tsXuyj7p3f1pfqEOWhfWf7naPQlfeXdZ1ccbD94sMr1lBILxmFb7sLi0tPfj4clGW+U8/la34F96Fslz++N93l5a6L0OKR6zGQ3rNir5v5dkNnOLe6wFZlvZuX6Zkmb/x8+7uq2WRKldf7e7+fJWW5fLt7KsauJQ3cd8yhJUFpPnP1klZru5egkkkC3pzl9Bl/oP1z+aRKkvdYXD+7dxZD2Smt9Sbm//P7bEs87+kGX/NV+V1KtovxAdufzI/h1Tp9c4mL8vE7xN9joq4twTbDVH4P6N8X/qV271kol36L/HuDYCX0u86olzcRO4T8a/TRxQouewlBd6dtOYvFTL+Ks34C74sL9J3XxXeTb+pe6djRCjgA24wAZgmeVfRRgNRb69XyHnat+w+5Dei5d/Qu78XXgbdLZTlZYx51BJ6Yjp2DnUtxdoyN/fr7u6l334SHVT4/RJ490XxZfhVe0s9e2p2zuHZORNZHPsOGoqKtWVu/uHr12LjMj/3+vVD5t2sDVWSRS+sjYNlcbAsDr01TwEf/zi+Ne/QNsrGpgkWzkGXJ4tJQqocaPKg7dy4tjAubmznnEZiLNzr9thGZCZLr/uG5AFDZp1POwc3W18edLtCQ6uelrvdg5elDeB82LkU2MP7lXVZvufi+cxU7ZxTY/BG66i6LEd2Y9F+IpDSCExi4EFkBjwMorONqrJsnPnVefBBMdNQoGYiif1RXZYhw6MWO8c0gaY2WxGoLgvVHbwt0ZWr9rnL92u58Kth58TdZVwSHK20EeWzcPtOxeqycUexu+Q2IvHmTsLptjUjoLYrhMwa3q0my91hgxFQG/ItsCHeq9SKlu+9pYFK9iu1oo39JmVRsnPisUwrFvdcheqyPCfioWXnVKO/NxgO3a/i6ICXa5AqFEg6EuUKG45EVI2r0rnYjcT5xyMRkqWkX6grUEli3rtsnBX909ti5yAL08Fo+V44BVn4Y30+xLNjfT7Ea0ZdHxpWl42hqxPXqY15OAIelmgpKzto1nDcOdus1904C4o8TI79aCwsNORb8mXyNwa6bLyxNeYzCr6FaojTtnNpOD797mX5HrM8PWU7V1yj0LVR7IkqJ9I1dctzrs1ZK6nDzgkWkYAe9a1oKa7w+UM9XZbnhl6NPCKl9TwoUJmdq7SwwK4H67Wj5U+1u0u5nSOHj9mwc3m/cF+53924Hzp8//Q22TlM50xx7WXjTjjF6MqTsHPyqOtqvm7jD8coTGe7zFZaZXaOPYZH7R/Tp+/4+7b5wCjbx6YHRifp7pWrstfzKB5q+8fZz9Mb6yIeuAk4NrGhXeJbnLFvcar4Fs6ph/BBt1tSYfa63a7J8rTYtzCHaWfHzhGydGU1BorCyDJlOyeJuq5ko8oPyNs9lO1uj1tlNvC7krhOerbS4vIosXOq582kD68pAun5Oz/LOMz7HiXNxh7xVsTnoUWI5VF+IBAK1Mw+UWEW/qBLpR5IS+A/+tUHsckpSWU7J9knQrI0bedCRhZ+ejDTj7Kdmiy9eKqyNG/nFGtLbBZ1va3Oo3DyTWznVB6iQ1ymKIL8lon0ITqJiip4JLK1bndkIBLzoAn5JMB6cHwLE6aTG0ap3LfI7iSFSrWla3IX6PzbOUVZpmznJFHXOVEaqti5sNP98MMP5ZLAP7Dq4mFxeQhO7AM9zG6DepzboIq3Y/3Ysk9PtgbD/c8PPhRoA18/+Hx/ONg6PLUtYLF0bqUKCQnC0efXdQkZUHFw7FybZ+c4V4ZFdk58l7p9vLm11mqhqD3WcP/oYY/SBvyj9/Bof4jePmm11rZax7aQx8SO/SBZmlmGAsA/3uwDTUDqI26pNmdHB6iCAHkOjs6G+RthH/3pWn/zOEjeWjsXDA4zTWBeb1pUGu6/ebM/pF+7Of7r/uEgsM+xneNcA01Hs2R0MhYFVherkL74ovgK+edr/ZORxfAQ2DmKh+AiA8fOjaN6oAgn0tgrZaFOwtDOQZxF8mNjwESDk36LSmuntAZffvTRl/Qrp2uFT5wMojEPGSEcWpAOStNhgtIIY8A0Y+eS9kkhiyBtFlS5cKGgy0XmI/2TtDZII/Vo2EpxxKAG7Fyc3OwzOQR5HBRUKejSZpUEHzqmCE3SzpVGXZfZKIewUSkLxj21W7wMttYOi6rQuhzyP7XZNuFBEZLZOZdj5yQh2spjtSX82HXW8RYve7Dkg6IqpC4Br4ZlFUaLh+TpQh0KEFFPEIOxneMH9GNsVFtg51zGPSXuJrfQUcEfM6oQuhyLP7eJf54fkqbAQ8HOMZEOU1km51sGoryhlApw7ZsLRPrmWvqqUBUoTHsW7Jy5yx2JWkKauxGrC1ZlJJOltTWaPTvn5O7Jye2cy7Vzwm4lS3iMvvYIq/IoU8XalH9y65hv5zg8DOyca5VGXRdGJA6pwMycCM3eTWmJw8zhidE13LtgVcISQVv9m5YCD+wvZVHoeRGaCd8ifogOP8i5yLe4GbBKVSEmRo9TVR7jfyt+lhdHu8ij4xZ9Hd/Ouc3YueN+Wc5A3jqZDLgRZf/slKqSOrsGboiY1hY8qBVKaVTWDJAs2cToq6xzefRV+u/idIibQL87sdpS8gCFQBzkPJH1LVa7r5CxvNPFfS7ucUs6XKzLwC/jodi3FJ8sgUiY27l2wc6N3ZNKcYPURz9nfY3N/9fon4qatlpekRDDQ8/OuTp2Tt+3BCeK+WodIgbfYVm+Q/88VPzw2gmvX5jd1Tmxcy+mLfRVf+Iu90/ER6VbSnU5naQstc2JsjornOZxMoYmRo+xLI/1REXTTU4jMp0T5Y0IzRilzy3jPSaMel5YGBeen+YrNyGoCyyO3P1/A/OnrkqrdeIXn1smf44bNZUWPtBtvN7Cj4qZDdBa6y22fD5TlGVUNP+aHw8xD6fAo8p6ywTsnKeTLbRj9O1Ylm/R7pBOSgr9wozYuaIsoZIXG6ctOx+I0FBkK3e4KKWOsIa1XL6dy6eK1Jwx0Z4q+oFWrtDk5q+xLH8pTIcKiT9nLJsqsg+iZexc9X2i8YQ+GvQ1s7U1HojgUKSrytqpXf8+EZKlTt/S0ewaYL4ejWV5pNXhonSSzP7qnK1s3Mdpk1jLfaQ2HSJTfzBpO6d4YkFk5+BAruHFcLr1/ViWH25pf3ztZlj7Ejc/7LlKtHP+RoR21wDTk3GX+0RfltZFq+r5FmZDpM7TUBAYtCFQXf7GsvxtoEqrb9O2ssppqAnZOYM2BGT5H55B/2MiC5hXNRC/pdLWvPY4lCZcW8w+fSKVxWRrHh53yC4zhXmw9RQkACQUCAAIKeABkJ2HhSc6rNiksow73e9NKguoLnGRBzyXC89vQFkwSM9vkCA9yIFBGv0d61HnsR97YCZL62J6YoE9u6Emy0ByinsG7JzufChPt34w7nChLMcdisesrc4l/NMXCrLAMdpodEbpMJ6ELHUdQHXV13AZXWBtMVUlO85a4wFUdNuq4/sdCgQlwCsCPwP61h3L8s+FC0ajM0qbNA/J7TOfuXTGvX1meFdRcKjc75tmrHXxwgXDDrcFDZ1d7+H2eu1coreERKZbPxhMh3DaatsTt3O2zM7JZeEeA1RMT56YfxZMohVk0bs4w7lmpXxrvnDNytS2VE1ro5B7zQrJQl2zYu995beryGtW6BvqsnN6a/61ykLxqH4pD8lSm2+Zriwza+dOL04pTUSWuq6Hu6GXrppHXgZgIEr0qQ4MakmBGAePzAEMsBnQIFAD6Y9pR/spsXMlT7HRiCEQ+TgCEwuywEs+D/iqIPDxN3KAmBkVQ4AGvExPJvSEJJKY1sN8hBHNJh56ooGrEHq7B5X7hYnbOVvbzgllUX+Yj0yWaUQprGsPWmHvl97yLchC8lC4Hi48Ulhp0RKm5iKgWgX3NJGo63VEQEWy1LirqBqRQ60BvHOBSs6DLBI7lw9qtQVvdE3DdNYTvFEtFneD4dDPUaojMKxynH/zh/nInjegVeNUo7+/t3OzFL/lvSznUZb/AwkADkmoUajiAAAAAElFTkSuQmCC',
      productName: 'Product 2',
      stack: 15,
      price: 25,
      totalSales: 375,
    },
    // Add more products as needed
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Earning</p>
                      <Card.Title as="h4">$198k</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  this month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Orders</p>
                      <Card.Title as="h4">$2.4k</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  this month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Balance</p>
                      <Card.Title as="h4">$2.4k</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  this month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total sales</p>
                      <Card.Title as="h4">$89K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  This week
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="7">
            <div>
              <Card>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title as="h4">Overview</Card.Title>
                      <p className="card-category">Monthly Earnings</p>
                    </div>
                    <div>
                      <select className="form-control">
                        <option value="quaterly1">Quaterly1</option>
                        <option value="Quaterly2">Quaterly2</option>
                        <option value="Quaterly3">Quaterly3</option>
                        <option value="Quaterly4">Quaterly4</option>
                      </select>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div>
                    <canvas ref={chartRef} id="barChartCanvas" width="400" height="200"></canvas>
                  </div>
                </Card.Body>
                <Card.Footer>

                </Card.Footer>
              </Card>
            </div>

          </Col>
          <Col md="5">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Customers</Card.Title>
                <p className="card-category">Customers that buy products</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
             
              </Card.Body>
            </Card>
          </Col>
        </Row>

      <Row>
      <Col md="12">
        <Card>
          <Card.Body>
          <Row>
              <Col md="12">
                <Card.Title as="h4">Product Sell</Card.Title>
               
              </Col>
              <Col md="12">
                <div className="d-flex justify-content-end">
                  <Form.Group controlId="last30DaysDropdown">
                    <Form.Control as="select">
                      <option value="last7Days">Last 7 Days</option>
                      <option value="last30Days">Last 30 Days</option>
                      <option value="last90Days">Last 90 Days</option>
                    </Form.Control>
                  </Form.Group>
                </div>

              </Col>

            </Row>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Stack</th>
                    <th>Price</th>
                    <th>Total Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex">
                          <img src={item.productImage} alt="Product" width="40" height="40" />
                          <span className="ml-2">{item.productName}</span>
                        </div>
                      </td>
                      <td>{item.stack}</td>
                      <td>{item.price}</td>
                      <td>{item.totalSales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
   
     
    </Row>
      </Container>
    </>
  );
}

export default Dashboard;
