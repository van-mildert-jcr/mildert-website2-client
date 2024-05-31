/**
 * @typedef {import('next').NextConfig} NextConfig
 */

/* https://velite.js.org/guide/with-nextjs */
class VeliteWebpackPlugin {
  static started = false

  /**
   * @param {import('webpack').Compiler} compiler
   */
  apply(compiler) {
    async function beforeCompile() {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite');
      await build({ watch: true, clean: !dev });
    }

    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', beforeCompile)
  }
}

/** @type {NextConfig} */
const nextConfig = {
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
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
