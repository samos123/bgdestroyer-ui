
export default function Pricing() {

    return (
        <>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className="display-4 fw-normal">Pricing</h1>
              <p className="fs-5 text-muted">Priced so anyone can use it for free for most use cases</p>
        </div>
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Anonymous</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>2 credits per month</li>
                      <li>API Access</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Free Registered Users</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 credits per month</li>
                      <li>API Access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Sign Up as Free User</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                  <div className="card-header py-3 text-bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Business</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$5<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>100 credits per month included</li>
                      <li>$0.05 per credit afterwards</li>
                      <li>API Access</li>
                      <li>Priority email support</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Sign Up for Paid Plan</button>
                  </div>
                </div>
              </div>
            </div>
        <p>* Prices might change if current pricing is not sustainable</p>

          </main>
        </>
    )
}
