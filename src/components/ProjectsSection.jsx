import React, { useState } from 'react';
import { ShoppingBag, ExternalLink, Eye, Sparkles, Filter, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Shopify 2.0', 'D2C E-Commerce', 'Interactive UI'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#080c14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mono-font">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Featured E-Commerce Work</span>
          </div>
          <h2 className="syne-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Live Production Stores & <br className="hidden sm:inline" />
            <span className="gradient-text-emerald">Shopify Front-End Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A showcase of live client storefronts across international brands engineered for high performance, mobile responsiveness, and maximum conversions.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent"></div>
                
                {/* Region & Category Pills */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-emerald-400 text-[11px] font-semibold mono-font">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-300 text-[11px] font-medium">
                    {project.clientRegion}
                  </span>
                </div>

                {/* Quick Overlay Action */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-transform hover:scale-110 shadow-lg"
                    title="Quick View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-emerald-400 transition-transform hover:scale-110 shadow-lg"
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="syne-font text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800/80 text-slate-400 text-[10px] mono-font"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
