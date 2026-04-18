import logo from "../assets/owesome-logo.svg"

export default function LandingPage() {
  return (
    <div>
      <section className="py-20 px-4 mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl mb-6 text-gray-800 font-bold">Math is hard.<br />
                <span className="text-primary">We're not.</span></h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">No confusion, no tension — just clear, easy, fast, and fair splits.</p>
              <a href="#xxx" className="btn-primary px-8 py-3">Split bills now</a>
            </div>
            <div className="order-first lg:order-last">
              <img src="/hero-section-image.png" className="w-full object-contain rounded-lg drop-shadow-md" />
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 px-4 bg-orange-100/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Scan, split, settle — all in seconds.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-700 text-gray-200 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lightning Fast</h3>
              <p className="text-gray-600">Experience blazing fast performance with our optimized platform</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-700 text-gray-200 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure &amp; Reliable</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security measures</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-700 text-gray-200 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Loved by Users</h3>
              <p className="text-gray-600">Join thousands of satisfied customers who trust our solution</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <div className="flex items-center gap-1 mb-4">

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>

              <p className="text-gray-600 mb-4">"This product completely transformed our business operations. The results speak for themselves!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>

                </div>

                <div>
                  <div className="font-semibold text-gray-800">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1 mb-4">

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>

              <p className="text-gray-600 mb-4">"Outstanding support and amazing features. Highly recommend to anyone looking for a high-quality product."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>

                </div>

                <div>
                  <div className="font-semibold text-gray-800">Michael Chen</div>
                  <div className="text-sm text-gray-500">Founder, StartupXYZ</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">

            <div className=" p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">How does the free trial work?</h3>
                  <p className="text-gray-600">You can try our service for 14 days without any commitment. No credit card required to get started.</p>
                </div>
              </div>
            </div>

            <div className=" p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Can I cancel anytime?</h3>
                  <p className="text-gray-600">Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.</p>
                </div>
              </div>
            </div>

            <div className=" p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-orange-100/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Any questions? Feel free to reach out to us.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="p-8  rounded-2xl shadow-lg">
              <form className="space-y-4">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                  <label className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-primary-600">Your Name</label>
                </div>

                <div className="relative">
                  <input type="email" id="email" placeholder=" " className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                  <label className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-primary-600">Your Email</label>
                </div>




                <div className="relative">
                  <textarea id="message" placeholder=" " className="peer w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"></textarea>
                  <label className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-primary-600">Your Message</label>
                </div>

                <button type="submit" className="w-full bg-primary-700 text-white p-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-lg">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-orange-100/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Join thousands of users who are already using our platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-[90%] md:w-[80%] mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">10,000+</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Happy Users</div>
                <div className="text-sm text-gray-600">Active users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">99.9%</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Uptime</div>
                <div className="text-sm text-gray-600">Service reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">24/7</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">Support</div>
                <div className="text-sm text-gray-600">Always available</div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 mb-8"><a href="#xxx" className="px-8 py-4 rounded-lg font-semibold transition-colors bg-primary-700 text-white hover:bg-primary-800">Get Started</a>  <a href="#xxx" className="px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors">Learn More</a>


            </div>
            <p className="text-gray-600">Trusted by 10,000+ users worldwide</p>

          </div>

        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Logo" className="h-9 w-9 shrink-0" />

                <h3 className="text-xl font-bold">Your Company</h3>

              </div>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">Building the future of technology with innovative solutions that make a difference.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base lg:text-lg">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Features</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Pricing</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Documentation</a>

                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base lg:text-lg">owesome</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">About</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Blog</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Careers</a>

                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base lg:text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Help Center</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Contact</a>

                </li>
                <li><a href="#xxx" className="hover:text-white transition-colors text-sm lg:text-base">Privacy Policy</a>

                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm lg:text-base">© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}