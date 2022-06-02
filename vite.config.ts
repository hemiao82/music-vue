import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path=require("path")
// https://vitejs.dev/config/
export default
	defineConfig({
		server: {
			port: 3000,

		},
		plugins: [
			vue()
		],

		resolve: {
			alias: {
			  "@": path.resolve(__dirname, "./src"),
			}
		  }
		// resolve: {
		// 	alias: {
		// 		'@': '/src'
		// 	}
		// },
		// css: {
		// 	//css预处理
		// 	preprocessorOptions: {
		// 		scss: {
		// 			/*
		// 			引入var.scss全局预定义变量，
		// 			如果引入多个文件，
		// 			可以使用
		// 			'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
		// 			这种格式
		// 			 */
		// 	//		additionalData: '@import "@/assets/scss/globalVariable.scss";'
		// 		}
		// 	}
		// }
	})

