<template>
	<div class="qa-container">
		<div class="head flex">
			<el-icon class="icon-back cursor-pointer" @click="goBack">
				<ArrowLeftBold />
			</el-icon>
			<li class="flex-initial w-full text-center animate__animated animate__fadeInDown">高管招聘</li>
		</div>
		<img class="img" src="@/assets/myService/detail_2_1.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<li class="msg">{{ pageInfo.conf1.msg }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf1.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-tip" v-for="tip in item.tips" :key="tip">-{{ tip }}</li>
					<li class="item-tip">......</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg">{{ pageInfo.conf2.msg }}</li>
			<li>
				<span class="step" v-for="(item, index) in pageInfo.conf2.steps" :key="index">
					<span class="step-num">{{ index + 1 }}</span>
					<span class="step-key">{{ item }}</span>
				</span>
			</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf2.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<div class="tips-cont">
						<div class="item-tips" v-for="(tip, index) in item.tips" :key="index">
							<div v-for="t in tip" :key="t">
								<li>{{ t }}</li>
							</div>
						</div>
					</div>
				</div>
			</div>
			<li class="msg">{{ pageInfo.conf2.tips }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_2_2.png" alt="">
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const qaList = [
	{
		q: '为什么要加入CSUITE?',
		a: '在Csuite，我们相信每一个人。我们专注于寻找他们，了解他们，建立连接并帮助他们成长。在Csuite，我们释放人类潜能的力量。如果您对招聘工作感兴趣，或者您只是准备改变赛道，尝试新的道路并释放自己的潜力 - 那么您来对地方了。今天就和我们谈谈，准备好和我们一起翱翔吧。我们提供基于绩效的透明、更快速的职业发展结构。这不是我们临时做的事情。当我们雇用你时，我们正在寻找潜在的新兴领导者，这些人不仅可以成长为明天的领导者，更可以成长为明天的明星。'
	}
]
const pageInfo = {
	conf1: {
		title: '管理者画像与关键岗位画像的区别',
		msg: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。',
		cards: [
			{
				name: '人-岗匹配',
				tips: ['岗位铁律型要求', '关键历练要求', '绩效要求', '能力要求']
			},
			{
				name: '人-组织匹配',
				tips: ['企业文化', '团队搭配', '组织氛围', '组织发展阶段']
			}
		]
	},
	conf2: {
		title: '人与组织匹配逻辑',
		msg: '不同发展成熟度的组织需要对应的领导风格和领导特质',
		steps: ['初创期', '冲突期', '融合期', '高效期'],
		cards: [
			{
				name: '阶段特质',
				tips: [
					['互相熟悉', '使用套话', '不互相揭发', '没有冲突'],
					['团队一致性低', '陈词滥调增加', '冲突增加', '创新变革减少'],
					['开放的思想', '积极聆听', '团队思想建立', '领导力共享'],
					['高创造力', '不必寻求太多批准', '强烈的忠诚', '高凝聚力']
				]
			},
			{
				name: '适合领导风格',
				tips: [
					['指导型'],
					['教练型'],
					['支持型'],
					['授权型']
				]
			},
			{
				name: '适合领导特征',
				tips: [
					['控制性高'],
					['进取性高', '控制性高'],
					['外向性高', '宜人性高'],
					['宜人性高']
				]
			}
		],
		tips: '可从财务、客户、内部运营、队伍建设四个维度来评估不同组织的成熟度情况。同时，针对不同的组织特点，优先选择在性格特质、领导风格、经验、核心能力方面更符合组织要求的干部。'
	}
}
onMounted(() => { });
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

		.icon-back {
			font-size: 32px;
		}
	}

	.img {
		margin-top: 40px;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		padding-bottom: 40px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 36px;
		}

		.cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.card {
				flex: 0 0 auto;
				width: 648px;
				margin-bottom: 16px;
				border-radius: 8px;
				padding: 40px 32px;
				border: 1px solid #B0A7A7;

				.item-name {
					font-size: 28px;
					font-weight: 500;
					padding-bottom: 32px;

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

				.tips-cont {
					display: flex;

					.item-tips {
						margin: 0 16px;
						font-size: 16px;
						line-height: 28px;
					}
				}


			}
		}

		.step {
			display: inline-block;
			font-size: 24px;
			font-weight: 500;
			height: 60px;

			.step-num {
				color: #E30214;
			}

			.step-key {
				color: #4C4143;
				margin: 0 18px;
			}
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
			line-height: 30px;
			font-weight: 500;
			padding-bottom: 12px;

			.icon-back {
				position: absolute;
				left: 0;
				font-size: 24px;
				z-index: 9;
			}
		}

		.img {
			width: 340px;
			margin-top: 16px;
		}

		.conf-info {
			width: auto;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			padding-bottom: 16px;

			.title {
				font-size: 18px;
				line-height: 24px;
				font-weight: 500;
				margin: 20px 0;
			}

			.msg,
			.tip {
				font-size: 12px;
				line-height: 18px;
				margin-bottom: 18px;
			}

			.cards {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.card {
					flex: 0 0 auto;
					width: 358px;
					margin-bottom: 16px;
					border-radius: 8px;
					padding: 10px 12px;
					border: 1px solid #B0A7A7;

					.item-name {

						font-size: 18px;
						font-weight: 500;
						padding-bottom: 12px;

						&::before {
							content: '';
							display: inline-block;
							margin-right: 10px;
							width: 3px;
							height: 12px;
							border-radius: 4px;
							background-color: #E30214;
						}
					}

					.tips-cont {
						display: flex;

						.item-tips {
							margin: 0 10px;
							font-size: 12px;
							line-height: 18px;
						}
					}


				}
			}

			.step {
				display: inline-block;
				font-size: 24px;
				font-weight: 500;
				width: 160px;
				text-align: center;
				height: 60px;
				line-height: 60px;

				.step-num {
					color: #E30214;
				}

				.step-key {
					color: #4C4143;
					margin: 0 18px;
				}
			}
		}
	}
}
</style>