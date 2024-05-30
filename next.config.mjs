/**
 * @typedef {import('next').NextConfig} NextConfig
 */

/** @type {NextConfig} */
const nextConfig = {
};

/**
 * @callback NextPluginApplicator
 * @param {NextConfig} nextConfig
 * @returns {NextConfig}
 */

class ConfigBuilder {
  /**
   * @param {NextConfig} config
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {NextPluginApplicator} pluginApplicator
   * @returns {ConfigBuilder}
   */
  apply(pluginApplicator) {
    this.config = pluginApplicator(this.config);
    return this;
  }

  /**
   * @returns {NextConfig}
   */
  get() {
    return this.config;
  }
}

export default new ConfigBuilder(nextConfig)
  .get()
