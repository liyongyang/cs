<template>
	<div class="case-container">
		<div class="head">
			<el-icon class="icon-back cursor-pointer animate__animated animate__headShake" @click="goBack">
				<ArrowLeftBold />
			</el-icon>
			<img class="banner animate__animated animate__fadeInDown" :src="`/customer/case/banner_case` + idx + `.png`"
				alt="">
		</div>
		<div class="content" v-if="activeConf">
			<li class="case-name flex-initial w-full text-center">{{
				activeConf.title }}</li>

			<li class="case-opt">大致介绍</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf1" :key="idx">{{ item }}</li>

			<li class="case-opt">{{ activeConf.name }}介绍</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf2" :key="idx">{{ item }}</li>

			<li class="case-opt">项目简介</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf3" :key="idx">{{ item }}</li>

			<li class="case-opt">成果</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf4" :key="idx">{{ item }}</li>

			<li class="case-opt">搜索方法</li>
			<div class="cards" v-for="(item, idx) in activeConf.card" :key="idx">
				<li class="card-name">{{ item.name }}</li>
				<li class="card-msg" v-for="(msg, i) in item.msg" :key="i">{{ msg }}</li>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import config from "./source";
const route = useRoute();
const router = useRouter()

const idx = ref(+route.params.case + 1)
const activeConf = ref()

onMounted(() => {
	activeConf.value = config[idx.value - 1]
	console.log(activeConf.value)
});

const goBack = () => {
	router.push('/customer')
}

</script>
<style lang='scss' scoped>
.case-container {
	width: 1312px;
	margin: 0 auto;
	color: #4C4143;
	text-wrap: wrap;
	word-wrap: break-word;
	white-space: pre-wrap;

	.head {
		position: relative;
		margin-top: 48px;

		.icon-back {
			z-index: 9;
			position: absolute;
			top: -40px;
			left: 0;
			font-size: 32px;
			width: 80px;
			height: 80px;
			border-radius: 100%;
			background-color: #ffffff;
		}

		.banner {
			width: 100%;
			border-radius: 12px;
		}
	}

	.case-name {
		font-size: 48px;
		line-height: 63px;
		font-weight: 500;
		margin: 40px auto;
	}

	.case-opt {
		font-size: 28px;
		line-height: 37px;
		font-weight: 500;
		margin: 40px auto;
	}

	.case-msg {
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 16px;
	}

	.cards {
		margin-bottom: 16px;
		border-radius: 12px;
		padding: 32px;
		border: 1px solid #B0A7A7;

		.card-name {
			font-size: 24px;
			line-height: 28px;
			margin-bottom: 16px;
			font-weight: 500;

			&::before {
				content: '';
				display: inline-block;
				margin-right: 20px;
				width: 3px;
				height: 20px;
				border-radius: 8px;
				background-color: #E30214;
			}
		}

		.card-msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 16px;
		}
	}
}

@media (max-width: 576px) {
	.case-container {
		width: 358px;
		margin: 0 auto;
		color: #4C4143;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.head {
			position: relative;
			margin-top: 20px;

			.icon-back {
				z-index: 9;
				position: absolute;
				top: -18px;
				left: 0;
				font-size: 16px;
				width: 36px;
				height: 36px;
				border-radius: 100%;
				background-color: #ffffff;
			}

			.banner {
				width: 100%;
				border-radius: 12px;
			}
		}

		.case-name {
			font-size: 20px;
			line-height: 32px;
			font-weight: 500;
			margin: 20px auto;
		}

		.case-opt {
			font-size: 16px;
			line-height: 28px;
			font-weight: 500;
			margin: 12px auto;
		}

		.case-msg {
			font-size: 14px;
			line-height: 22px;
			margin-bottom: 12px;
		}

		.cards {
			margin-bottom: 12px;
			border-radius: 12px;
			padding: 14px;
			border: 1px solid #B0A7A7;

			.card-name {
				font-size: 16px;
				line-height: 22px;
				margin-bottom: 8px;
				font-weight: 500;

				&::before {
					content: '';
					display: inline-block;
					margin-right: 10px;
					width: 3px;
					height: 12px;
					border-radius: 8px;
					background-color: #E30214;
				}
			}

			.card-msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 12px;
			}
		}
	}
}
</style>