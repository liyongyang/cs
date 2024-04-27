<template>
	<div class="case-container">
		<div class="head animate__animated animate__fadeIn">
			<div class="icon_wrap" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
			</div>
			<img class="banner animate__animated animate__fadeInDown" :src="`/customer/case/banner_case` + idx + `.png`"
				alt="">
		</div>
		<div class="content" v-if="activeConf">
			<li class="case-name flex-initial w-full text-center">{{
				activeConf.title }}</li>

			<li class="case-opt">{{ t('customer_case.tit1') }}</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf1" :key="idx">{{ item }}</li>

			<li class="case-opt">{{ activeConf.name }}{{ t('customer_case.tit2') }}</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf2" :key="idx">{{ item }}</li>

			<li class="case-opt">{{ t('customer_case.tit3') }}</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf3" :key="idx">{{ item }}</li>

			<li class="case-opt">{{ t('customer_case.tit4') }}</li>
			<li class="case-msg" v-for="(item, idx) in activeConf.conf4" :key="idx">{{ item }}</li>

			<li class="case-opt">{{ t('customer_case.tit5') }}</li>
			<div class="cards" v-for="(item, idx) in activeConf.card" :key="idx">
				<li class="card-name">{{ item.name }}</li>
				<li class="card-msg" v-for="(msg, i) in item.msg" :key="i">{{ msg }}</li>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n()
const route = useRoute();
const router = useRouter()

const idx = ref(+route.params.case + 1)
const activeConf = ref()
const config = [
	{
		name: t("customer_case.case1.name"),
		title: t("customer_case.case1.title"),
		conf1: [
			t("customer_case.case1.conf1[0]"),
			t("customer_case.case1.conf1[1]"),
			t("customer_case.case1.conf1[2]"),
		],
		conf2: [
			t("customer_case.case1.conf2[0]"),
		],
		conf3: [
			t("customer_case.case1.conf3[0]"),
			t("customer_case.case1.conf3[1]"),
		],
		conf4: [
			t("customer_case.case1.conf4[0]"),
			t("customer_case.case1.conf4[1]"),
		],
		card: [
			{
				name: t("customer_case.case1.card[0].name"),
				msg: [
					t("customer_case.case1.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case1.card[1].name"),
				msg: [
					t("customer_case.case1.card[1].msg[0]"),
					t("customer_case.case1.card[1].msg[1]"),
				],
			},
			{
				name: t("customer_case.case1.card[2].name"),
				msg: [
					t("customer_case.case1.card[2].msg[0]"),
					t("customer_case.case1.card[2].msg[1]"),
					t("customer_case.case1.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case2.name"),
		title: t("customer_case.case2.title"),
		conf1: [
			t("customer_case.case2.conf1[0]"),
			t("customer_case.case2.conf1[1]"),
			t("customer_case.case2.conf1[2]"),
		],
		conf2: [
			t("customer_case.case2.conf2[0]"),
		],
		conf3: [
			t("customer_case.case2.conf3[0]"),
			t("customer_case.case2.conf3[1]"),
		],
		conf4: [
			t("customer_case.case2.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case2.card[0].name"),
				msg: [
					t("customer_case.case2.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case2.card[1].name"),
				msg: [
					t("customer_case.case2.card[1].msg[0]"),
					t("customer_case.case2.card[1].msg[1]"),
					t("customer_case.case2.card[1].msg[2]"),
				],
			},
			{
				name: t("customer_case.case2.card[2].name"),
				msg: [
					t("customer_case.case2.card[2].msg[0]"),
					t("customer_case.case2.card[2].msg[1]"),
					t("customer_case.case2.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case3.name"),
		title: t("customer_case.case3.title"),
		conf1: [
			t("customer_case.case3.conf1[0]"),
			t("customer_case.case3.conf1[1]"),
			t("customer_case.case3.conf1[2]"),
		],
		conf2: [
			t("customer_case.case3.conf2[0]"),
			t("customer_case.case3.conf2[1]"),
		],
		conf3: [
			t("customer_case.case3.conf3[0]"),
		],
		conf4: [
			t("customer_case.case3.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case3.card[0].name"),
				msg: [
					t("customer_case.case3.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case3.card[1].name"),
				msg: [
					t("customer_case.case3.card[1].msg[0]"),
					t("customer_case.case3.card[1].msg[1]"),
				],
			},
			{
				name: t("customer_case.case3.card[2].name"),
				msg: [
					t("customer_case.case3.card[2].msg[0]"),
					t("customer_case.case3.card[2].msg[1]"),
					t("customer_case.case3.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case4.name"),
		title: t("customer_case.case4.title"),
		conf1: [
			t("customer_case.case4.conf1[0]"),
			t("customer_case.case4.conf1[1]"),
			t("customer_case.case4.conf1[2]"),
		],
		conf2: [
			t("customer_case.case4.conf2[0]"),
		],
		conf3: [
			t("customer_case.case4.conf3[0]"),
		],
		conf4: [
			t("customer_case.case4.conf4[0]"),
			t("customer_case.case4.conf4[1]"),
			t("customer_case.case4.conf4[2]"),
		],
		card: [
			{
				name: t("customer_case.case4.card[0].name"),
				msg: [
					t("customer_case.case4.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case4.card[1].name"),
				msg: [
					t("customer_case.case4.card[1].msg[0]"),
					t("customer_case.case4.card[1].msg[1]"),
				],
			},
			{
				name: t("customer_case.case4.card[2].name"),
				msg: [
					t("customer_case.case4.card[2].msg[0]"),
					t("customer_case.case4.card[2].msg[1]"),
					t("customer_case.case4.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case5.name"),
		title: t("customer_case.case5.title"),
		conf1: [
			t("customer_case.case5.conf1[0]"),
			t("customer_case.case5.conf1[1]"),
			t("customer_case.case5.conf1[2]"),
		],
		conf2: [
			t("customer_case.case5.conf2[0]"),
			t("customer_case.case5.conf2[1]"),
		],
		conf3: [
			t("customer_case.case5.conf3[0]"),
		],
		conf4: [
			t("customer_case.case5.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case5.card[0].name"),
				msg: [
					t("customer_case.case5.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case5.card[1].name"),
				msg: [
					t("customer_case.case5.card[1].msg[0]"),
					t("customer_case.case5.card[1].msg[1]"),
				],
			},
			{
				name: t("customer_case.case5.card[2].name"),
				msg: [
					t("customer_case.case5.card[2].msg[0]"),
					t("customer_case.case5.card[2].msg[1]"),
					t("customer_case.case5.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case6.name"),
		title: t("customer_case.case6.title"),
		conf1: [
			t("customer_case.case6.conf1[0]"),
			t("customer_case.case6.conf1[1]"),
		],
		conf2: [
			t("customer_case.case6.conf2[0]"),
			t("customer_case.case6.conf2[1]"),
		],
		conf3: [
			t("customer_case.case6.conf3[0]"),
		],
		conf4: [
			t("customer_case.case6.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case6.card[0].name"),
				msg: [
					t("customer_case.case6.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case6.card[1].name"),
				msg: [
					t("customer_case.case6.card[1].msg[0]"),
				],
			},
			{
				name: t("customer_case.case6.card[2].name"),
				msg: [
					t("customer_case.case6.card[2].msg[0]"),
					t("customer_case.case6.card[2].msg[1]"),
					t("customer_case.case6.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case7.name"),
		title: t("customer_case.case7.title"),
		conf1: [
			t("customer_case.case7.conf1[0]"),
			t("customer_case.case7.conf1[1]"),
			t("customer_case.case7.conf1[2]"),
		],
		conf2: [
			t("customer_case.case7.conf2[0]"),
		],
		conf3: [
			t("customer_case.case7.conf3[0]"),
		],
		conf4: [
			t("customer_case.case7.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case7.card[0].name"),
				msg: [
					t("customer_case.case7.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case7.card[1].name"),
				msg: [
					t("customer_case.case7.card[1].msg[0]"),
				],
			},
			{
				name: t("customer_case.case7.card[2].name"),
				msg: [
					t("customer_case.case7.card[2].msg[0]"),
					t("customer_case.case7.card[2].msg[1]"),
					t("customer_case.case7.card[2].msg[2]"),
				],
			},
		],
	},
	{
		name: t("customer_case.case8.name"),
		title: t("customer_case.case8.title"),
		conf1: [
			t("customer_case.case8.conf1[0]"),
			t("customer_case.case8.conf1[1]"),
			t("customer_case.case8.conf1[2]"),
		],
		conf2: [
			t("customer_case.case8.conf2[0]"),
		],
		conf3: [
			t("customer_case.case8.conf3[0]"),
		],
		conf4: [
			t("customer_case.case8.conf4[0]"),
		],
		card: [
			{
				name: t("customer_case.case8.card[0].name"),
				msg: [
					t("customer_case.case8.card[0].msg[0]"),
				],
			},
			{
				name: t("customer_case.case8.card[1].name"),
				msg: [
					t("customer_case.case8.card[1].msg[0]"),
					t("customer_case.case8.card[1].msg[1]"),
				],
			},
			{
				name: t("customer_case.case8.card[2].name"),
				msg: [
					t("customer_case.case8.card[2].msg[0]"),
					t("customer_case.case8.card[2].msg[1]"),
					t("customer_case.case8.card[2].msg[2]"),
				],
			},
		],
	},
];
onMounted(() => {
	activeConf.value = config[idx.value - 1]
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

		.icon_wrap {
			position: absolute;
			top: -40px;
			height: 80px;
			width: 80px;
			cursor: pointer;
			background: #fff;
			text-align: center;
			padding: 12px;
			border-radius: 100%;
			z-index: 99;

			&:hover {
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.8);

			}

			.icon-back {
				margin: 10px auto;
				display: inline-block;
				font-size: 32px;
			}

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
