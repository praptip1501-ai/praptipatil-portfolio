import React, { useState } from 'react';
import { Code2, Copy, Check, Sparkles, Sliders, Play, Layers, Eye, RefreshCw } from 'lucide-react';

export default function LiquidPlayground() {
  const [ajaxCart, setAjaxCart] = useState(true);
  const [metafields, setMetafields] = useState(true);
  const [stickyATC, setStickyATC] = useState(true);
  const [gsapAnimation, setGsapAnimation] = useState(true);
  const [klaviyoForm, setKlaviyoForm] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateLiquidCode = () => {
    return `{% comment %}
  Custom D2C High-Conversion Shopify 2.0 Section
  Architect: Prapti Patil (Front-End & Shopify Specialist)
{% endcomment %}

<section 
  class="d2c-featured-product-section ${gsapAnimation ? 'has-gsap-trigger' : ''}" 
  data-section-id="{{ section.id }}"
  data-ajax-cart="${ajaxCart}"
>
  <div className="container">
    <div class="product-grid">
      
      <!-- Gallery Column -->
      <div class="product-gallery">
        {% for image in product.images %}
          <img 
            src="{{ image | image_url: width: 800 }}" 
            alt="{{ image.alt | escape }}"
            loading="lazy"
            class="product-img-slide"
          />
        {% endfor %}
      </div>

      <!-- Detail Info Column -->
      <div class="product-info-wrapper">
        <h1 class="product-title">{{ product.title }}</h1>
        <div class="product-price">{{ product.price | money }}</div>
${metafields ? `
        <!-- Custom Metafields Specifications -->
        {% if product.metafields.custom.specifications != blank %}
          <div class="metafields-spec-grid">
            <span class="badge">Verified Quality</span>
            <p>{{ product.metafields.custom.specifications }}</p>
          </div>
        {% endif %}` : ''}

        <!-- Add To Cart Form -->
        {% form 'product', product, class: 'shopify-product-form' %}
          <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}" />
          
          <button 
            type="submit" 
            name="add" 
            class="btn-atc ${stickyATC ? 'is-sticky-trigger' : ''}"
            ${ajaxCart ? 'data-ajax-submit="true"' : ''}
          >
            <span>Add to Bag — {{ product.price | money }}</span>
          </button>
        {% endform %}
${klaviyoForm ? `
        <!-- Klaviyo Back-in-Stock / VIP Discount Integration -->
        <div class="klaviyo-form-wrapper" data-klaviyo-form-id="VIP_PROMO"></div>` : ''}
      </div>

    </div>
  </div>
</section>

{% schema %}
{
  "name": "D2C Interactive Showcase",
  "settings": [
    { "type": "checkbox", "id": "enable_ajax", "label": "Enable AJAX Drawer", "default": ${ajaxCart} },
    { "type": "checkbox", "id": "show_metafields", "label": "Display Product Metafields", "default": ${metafields} }
  ],
  "presets": [
    { "name": "D2C Interactive Showcase" }
  ]
}
{% endschema %}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLiquidCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="playground" className="py-24 relative bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Shopify Demo</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Shopify 2.0 <span className="gradient-text-emerald">Section Configurator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Experience how I engineer custom, high-converting Liquid sections with dynamic feature toggles and AJAX drawer triggers.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Feature Controls */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-white border-b border-slate-800 pb-3">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <h3 className="syne-font text-lg font-bold">Section Features</h3>
            </div>

            <div className="space-y-4">
              
              {/* Toggle 1: AJAX Cart */}
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">AJAX Cart Drawer</span>
                  <span className="text-[11px] text-slate-400 block">Instant add-to-cart without reload</span>
                </div>
                <input
                  type="checkbox"
                  checked={ajaxCart}
                  onChange={(e) => setAjaxCart(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </label>

              {/* Toggle 2: Metafields */}
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">Dynamic Metafields</span>
                  <span className="text-[11px] text-slate-400 block">Custom product specs & badges</span>
                </div>
                <input
                  type="checkbox"
                  checked={metafields}
                  onChange={(e) => setMetafields(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </label>

              {/* Toggle 3: Sticky ATC */}
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">Sticky Add-To-Cart Bar</span>
                  <span className="text-[11px] text-slate-400 block">Increases conversion on mobile</span>
                </div>
                <input
                  type="checkbox"
                  checked={stickyATC}
                  onChange={(e) => setStickyATC(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </label>

              {/* Toggle 4: GSAP Scroll Animations */}
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">GSAP Scroll Animations</span>
                  <span className="text-[11px] text-slate-400 block">Smooth element entrance effects</span>
                </div>
                <input
                  type="checkbox"
                  checked={gsapAnimation}
                  onChange={(e) => setGsapAnimation(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </label>

              {/* Toggle 5: Klaviyo Integration */}
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">Klaviyo Form Wrapper</span>
                  <span className="text-[11px] text-slate-400 block">Email captures & VIP popups</span>
                </div>
                <input
                  type="checkbox"
                  checked={klaviyoForm}
                  onChange={(e) => setKlaviyoForm(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </label>

            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              ⚡ Toggle parameters above to observe real-time generated Liquid code update in the editor!
            </div>
          </div>

          {/* Right Generated Liquid Editor */}
          <div className="lg:col-span-8 glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            
            {/* Editor Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200 mono-font">
                  sections/d2c-interactive-showcase.liquid
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Liquid Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Output Window */}
            <div className="p-6 bg-[#050811] overflow-x-auto max-h-[520px] font-mono text-xs text-slate-300 leading-relaxed">
              <pre>{generateLiquidCode()}</pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
