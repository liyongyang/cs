<template>
	<div class="qa-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer" >
					<ArrowLeftBold />
				</el-icon>
				<span>返回</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">市场资讯服务</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_7_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf1.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf2.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf3.card" :key="index">
					<img :src="`/myService/icons/detail7_` + index + `.png`" alt="">
					<li class="card-txt">{{ item }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<div class="cards2">
				<li class="card2" v-for="(item, index) in pageInfo.conf4.card" :key="index">{{
				item }}
				</li>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<div class="cards2">
				<img class="img" v-for="index in 5" :key="index" :src="`/myService/icons/detail7_card_` + index + `.png`"
					alt="">
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<img class="img" src="/myService/icons/detail7_card2_1.png" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf7.title }}</li>
			<img class="img" src="/myService/icons/detail7_card2_2.png" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf8.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf8.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf9.title }}</li>
			<div class="cards3" v-for="(item, index) in pageInfo.conf9.card" :key="index">
				<li class="cards3-tit">{{ item.name }}</li>
				<li class="cards3-msg" v-for="t in item.msg" :key="t">{{ t }}</li>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp" >
			<li class="title">{{ pageInfo.conf10.title }}</li>
			<img class="img" src="/myService/icons/detail7_card2_3.png" alt="">
		</div>
	</div>
</template>

<script setup lang='ts'>
import {onMounted,ref,reactive,onUnmounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const pageInfo = {
	conf1: {
		title: '关于研亚咨询',
		msg: [
			'研亚咨询致力于通过深度、定制化的市场研究服务，帮助客户洞察技术发展趋势、发现新的业务机会、制定差异化的竞争策略、探寻产业链上合作伙伴，进一步为客户战略制定提供关键决策信息，从而实现业务的可持续增长研亚咨询在性能材料与特种化学品、新能源汽车、半导体/显示/电子、光伏、精密仪器等领域，系统研究与经验积累超过15年；服务于上述领域的全球领先企业，包括：万华、3M、赢创、亨斯迈、汉高、西门子、丰田、电装、日立化成、英飞凌、东丽、住友化学等'
		]
	},
	conf2: {
		title: '研亚咨询的使命',
		msg: [
			'研亚咨询致力于通过深度、定制化的市场研究服务，帮助客户洞察技术发展趋势、发现新的业务机会、制定差异化的竞争策略、探寻产业链上合作伙伴，进一步为客户战略制定提供关键决策信息，从而实现业务的可持续增长。',
		]
	},
	conf3: {
		title: '研亚咨询的服务',
		card: [
			'洞察技术发展趋势',
			'发现新的业务机会',
			'制定差异化的竞争策略',
			'优化商业模式&寻找合作伙伴',
			'规避决策风险'
		]
	},
	conf4: {
		title: '研亚咨询的优势',
		card: [
			'横跨科技与材料两个维度的复合研究',
			'针对材料的系统性研究',
			'针对众多不同下游领域的多维度研究',
			'贯穿汽车产业链各个环节的研究',
			'持续的研究经验积累&定制化设置研究内容',
			'成熟的数据模型运用',
			'能够为新业务机会甄选、市场进入提供专业咨询'
		]
	},
	conf5: {
		title: '研亚咨询深度研究的经验涉及领域与产品'
	},
	conf6: {
		title: '研亚咨询的产品和服务'
	},
	conf7: {
		title: '我们是如何持续关注合作伙伴多样的、各自不同的业务挑战'
	},
	conf8: {
		title: '始终，我们服务于客户的业务的持续增长，与核心竞争力构筑，这基于',
		msg: [
			'1.聚焦下游新的技术趋势、新的应用趋势、新的产品开发，发现新的业务机会',
			'2.贯穿产业链的研究，针对核心竞争要素、关键成功因素的深度分析'
		]
	},
	conf9: {
		title: '不用阶段不同挑战',
		card: [
			{
				name: '市场进入期',
				msg: [
					'谁是首期客户？',
					'他们需求是什么又如何满足？'
				]
			},
			{
				name: '业务快速成长期',
				msg: [
					'如何进一步扩大市场份额？'
				]
			},
			{
				name: '格局稳定市场份额饱和期',
				msg: [
					'如何保持持续竞争优势？',
					'客户忠诚度如何长久维护？'
				]
			},
			{
				name: '业务调整期',
				msg: [
					'新的机会是什么？',
					'怎样筛选新的业务机会？',
					'新业务开发与进入策略？'
				]
			}
		]
	},
	conf10: {
		title: '研亚咨询深服务的客户'
	}
}
const goBack = () => {
	router.go(-1)
	// router.push('/service')
}
</script>
<style lang='scss' scoped>
.qa-container {
	width: 1312px;
	margin: 0 auto;
	text-align: center;
	color: #4C4143;

	.head {
		display: flex;
		align-items: center;
		font-size: 48px;
		line-height: 63px;
		font-weight: 500;
		padding-bottom: 40px;
		.icon_wrap{
			position: fixed;
			top:109px;
			// display: flex;
			height:80px;
			width: 80px;
			border-radius: 40px;
			background: #fff;
			// padding-top:23px;
			text-align: center;
			&:hover span{
				opacity: 1;
				display: inline-block;
			}
			span{
				display: none;
				opacity: 0;
				position: relative;
				left: -2px;
				height: 32px;
				line-height: 32px;
				font-size: 18px;
				transition: all 0.5s ease-in-out;
			}
		}
		.icon-back {
			display: inline-block;
			font-size: 32px;
			vertical-align: sub;
		}
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		font-size: 18px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.img {
			margin-bottom: 32px;
		}

		.cards {
			display: flex;
			justify-content: space-between;

			.card {
				text-align: center;

				.card-txt {
					margin-top: 16px;
				}
			}
		}

		.cards2 {
			display: flex;
			flex-wrap: wrap;

			.img {
				margin: 0 16px 28px 0;
			}

			.card2 {
				// display: flex;
				padding: 36px 136px;
				border-radius: 8px;
				border: #E30214 4px solid;
				margin: 0 24px 24px 24px;
				text-align: center;
				align-items: center;
				font-size: 28px;
				line-height: 38px;
				font-weight: 500;
				width: 600px;
			}
		}

		.cards3 {
			border-radius: 12px;
			border: #B0A7A7 1px solid;
			padding: 40px;
			margin-bottom: 40px;

			.cards3-tit {
				font-size: 28px;
				font-weight: 500;
				line-height: 32px;
				margin-bottom: 16px;

				&::before {
					content: '';
					display: inline-block;
					width: 4px;
					height: 22px;
					margin-right: 16px;
					background-color: #E30214;
				}
			}

			.cards3-msg {
				font-size: 18px;
				line-height: 28px;

			}
		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 36px;
		}
	}
}

@media (max-width: 576px) {
	.qa-container {
		position: relative;
		width: 358px;
		margin: 0 auto;

		.head {
			display: flex;
			align-items: center;
			font-size: 24px;
			line-height: 40px;
			font-weight: 500;
			padding-bottom: 20px;

			.icon-back {
				position: absolute;
				left: 0;
				font-size: 24px;
				z-index: 9;
			}
		}

		.img {
			width: 358px;
		}

		.conf-info {
			width: 358px;
			margin-bottom: 40px;

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 20px
			}

			.cards {
				display: block;

				.card {
					display: flex;
					margin: 12px 0;
					padding-left: 50px;
					align-items: center;

					img {
						width: 48px;
					}

					.card-txt {
						margin: 0 20px;
						font-size: 14px;
					}
				}
			}

			.cards2 {
				.card2 {
					width: 358px;
					padding: 20px;
					font-size: 14px;
					line-height: 22px;
					margin: 12px auto;
					border: #E30214 2px solid;
				}

				.img {
					margin: 8px auto;
					margin-bottom: 0;
				}
			}

			.img {
				margin: 8px auto;
				margin-bottom: 0;
			}
		}
	}
}
</style>
