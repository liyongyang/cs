<template>
	<div class="qa-container">
		<div class="head flex">
			<el-icon class="icon-back cursor-pointer" @click="goBack">
				<ArrowLeftBold />
			</el-icon>
			<li class="flex-initial w-full text-center animate__animated animate__fadeInDown">职业教练</li>
		</div>
		<img class="img" src="@/assets/myService/detail_5_1.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf1.card" :key="index">
					<img :src="`/myService/icons/detail5_` + index + `.png`" alt="">
					<li class="item-tit">{{ item.tit }}</li>
					<li v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<div class="cards">
				<div class="card2" v-for="(item, index) in pageInfo.conf2.card" :key="index">
					<li class="item-num">{{ item.num }}</li>
					<li class="item-tit">{{ item.tit }}</li>
					<li v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf3.card" :key="index">
					<img :src="`/myService/icons/detail5_2_` + index + `.png`" alt="">
					<li class="item-tit">{{ item.tit }}</li>
					<li class="item-txt" v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<div class="cards2">
				<img class="conf4-img" src="/myService/icons/detail5_3_1.png" alt="">
				<li class="item-tip">{{ pageInfo.conf4.msg }} </li>
			</div>
			<div class="cards3">
				<div class="card3" v-for="(item, index) in pageInfo.conf4.cards" :key="index">
					<div class="item-tit">{{ item.tit }}</div>
					<div class="item-txt">{{ item.txt }}</div>
				</div>
			</div>
		</div>
		<img class="img" src="@/assets/myService/detail_5_2.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<img class="img" src="@/assets/myService/detail_5_3.png" alt="">
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<img class="img" src="@/assets/myService/detail_5_4.png" alt="">
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf7.title }}</li>
			<li class="conf7-msg" v-for="(t, idx) in pageInfo.conf7.msg" :key="idx">{{ t }}</li>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf8.title }}</li>
			<img class="img" src="@/assets/myService/detail_5_5.png" alt="">
			<div class="conf8-msg" v-for="(item, idx) in pageInfo.conf8.msg" :key="idx">
				<li v-for="(t, idx) in item" :key="idx">{{ t }}</li>
			</div>
			<img class="img" src="@/assets/myService/detail_5_6.png" alt="">
			<img class="img" src="@/assets/myService/detail_5_7.png" alt="">
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf9.title }}</li>
			<div class="person-card">
				<img v-for="index in 8" :key="index" :src="`/myService/icons/detail_5-card` + index + `.png`" alt="">
			</div>
			<li class="title2">{{ pageInfo.conf9.title2 }}</li>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf10.title }}</li>
			<div class="cards4">
				<img v-for="index in 4" :key="index" :src="`/myService/icons/detail_5_card2-` + index + `.png`" alt="">
			</div>
		</div>
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
		title: '领导者四大挑战',
		card: [
			{
				tit: '领导业务',
				msg: [
					'全面、系统、前瞻思考业务',
					'从全局把握业务的发展趋势和规律',
					'战略性思考和决策'
				],
			},
			{
				tit: '领导自我',
				msg: [
					'自我意识',
					'跳出固有思维，迎接挑战',
					'自我能量和活力管理',
					'自我发展'
				]
			},
			{
				tit: '领导团队',
				msg: [
					'网罗合适能千人才加入组织',
					'传递愿景、凝聚团队',
					'辅导他人、培养人才',
					'留住人才，避免员工倦怠'
				]
			},
			{
				tit: '领导变革',
				msg: [
					'提升灵活度、敏锐度，预判并快速应对变化',
					'领导业务转型，创新迭代',
					'对竞争大环境有所应对'
				]
			}
		]
	},
	conf2: {
		title: '我们的效果',
		card: [
			{
				tit: '协作能力',
				num: '71%',
				msg: [
					'提高领导者与他人互动、高效协作的能力',
				],
			},
			{
				tit: '思维创新',
				num: '49%',
				msg: [
					'推动增长和创新的领导者战略和批判性思维',
				]
			},
			{
				tit: '认知提升',
				num: '163%',
				msg: [
					'缓解领导者的高压情绪，提高自我认知',
				]
			},
			{
				tit: '应变能力',
				num: '62%',
				msg: [
					'提高面对冲和解决冲突的能力',
				]
			}
		]
	},
	conf3: {
		title: '我们如何做到',
		card: [
			{
				tit: '结合业务挑战',
				msg: [
					'行为改变科学',
					'积极心理学',
					'心理资本'
				],
			},
			{
				tit: '科学服务流程',
				msg: [
					'Double-PCD改变流程',
					'以业务和领导行为为靶心，有针对性、及时性地教练辅导'
				]
			},
			{
				tit: '内核和外核双核改变',
				msg: [
					'内核针对领导潜能',
					'外核针对领导行为'
				]
			},
			{
				tit: '行为改变科学',
				msg: [
					'基于行为改变科学',
					'系统打造领导者'
				]
			}
		]
	},
	conf4: {
		title: '科学服务流程',
		msg: 'Double-PCD改变流程，以业务和领导行为为靶，通过有针对性、及时性地教练辅导，支持领导者实现心智模式和领导行为的双重改变和提升，更好地应对业务挑战。',
		cards: [
			{
				tit: '绩效诊断',
				txt: '深度诊断管理者的领导行为对业务的影响'
			},
			{
				tit: '能力测评',
				txt: '精准定位需要提升的领导力'
			},
			{
				tit: '匹配专业教练',
				txt: '根据领导者的发展方向、风格特点等匹配最适合的教练'
			},
			{
				tit: '1V1在线辅导',
				txt: '随时发起60分钟约谈7*24小时在线个性化、针对性辅导高效快速解决工作问题长久提升能力'
			},
			{
				tit: '行动计划',
				txt: '会谈结束后，领导者及时产生影响业务的行为改变计划'
			},
			{
				tit: '数据反馈',
				txt: '实时追踪领导潜能和行为的数据报告'
			}
		]
	},
	conf5: {
		title: '常见应用场景'
	},
	conf6: {
		title: '什么时候高管必须有一位教练？'
	},
	conf7: {
		title: '高管工作表现的具体变化',
		msg: [
			'找到自己独特的领导风格，发挥影响力',
			'将目标与战略更好地结合及落地执行',
			'培养从不同的角度思考，提升创造性思维和洞察力',
			'提高影响力和大局观 从“我”到“我们”',
			'改善沟通技巧，更有效激励团队，改善团队的主动性与参与度',
			'适当的委派和让员工负责，成为一个更有生产力的领导者'
		]
	},
	conf8: {
		title: '甄选行业前30%高管教练',
		msg: [
			['专业资质：',
				'香港大学企业教练和领导力研究生',
				'ICF 认证ACC教练，实战教练时数280+，专注于高管教练，绩效教练以及职业转型教练',
				'Everything DiSC 认证测评以及授课讲师（Everything DiSC 被广泛用于团建，培训和人才发展）',
				'职业锚认证测评以及授课讲师',
				'Point of You 认证（POY被广泛适用于团建，培训和工作坊）',
				'CCDM职业规划师',
				'IMPA-HR高级人力资源管理师'],
			[
				'相关经验:',
				'“在行”注册行家，超过100小时一对一辅导，话题方向：了解个性特质MBTI，规划职业方向 、助力职业晋升，提升领导力',
				'2021年5月 西安建筑科技大学 讲授”职业规划“课程',
				'2021 - 2022  担任华东理工大学商学院  职业发展导师',
				'2021 - 2020 中智“导师巡航计划”大学生职业生涯规划，被评为十佳志愿者导师',
				'2019 上师大研究生职业生涯规划教练',
				'2018 同济大学经济与管理学院MBA签约教练',
				'2016 - 2017是交大马赛商学院MBA签约教练']
		]
	},
	conf9: {
		title: '100+多维度画像教练，满足员工多类话题诉求',
		title2: '还有更多教练期待你来开箱······'
	},
	conf10: {
		title: '部分代表产品'
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

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		padding-bottom: 40px;
		font-size: 18px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.title2 {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
			color: #E30214;
		}

		.img {
			margin-bottom: 32px;
		}

		.cards {
			display: flex;
			justify-content: space-between;

			.card {
				text-align: center;

				.item-tit {
					font-size: 28px;
					font-weight: 500;
					line-height: 32px;
					margin: 12px auto;
				}

				.item-txt {
					width: 211px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
				}
			}

			.card2 {
				width: 270px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;

				.item-num {
					font-size: 72px;
					font-weight: 500;
					line-height: 80px;

					&::after {
						content: '';
						display: block;
						width: 38px;
						height: 8px;
						margin: 16px 0;
						background-color: #E30214;
					}
				}

				.item-tit {
					font-size: 28px;
					font-weight: 500;
					line-height: 32px;
					margin: 12px auto;
				}
			}
		}

		.cards2 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 80px;

			.conf4-img {
				width: 479px;
				height: 479px;
			}

			.item-tip {
				width: 485px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
			}
		}

		.cards3 {
			display: flex;
			justify-content: space-between;
			margin: 40px 0;

			.card3 {
				width: auto;
				// flex: 0 0 auto;

				.item-tit {
					display: inline-block;
					width: auto;
					height: 159px;
					text-align: center;
					color: #fff;
					padding: 68px 48px;
					border-radius: 12px;
					background-color: #E30214;
				}

				.item-txt {
					margin-top: 12px;
					line-height: 28px;
					width: 167px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
				}

			}

		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 36px;
		}

		.conf7-msg {
			line-height: 48px;
		}

		.conf8-msg {
			margin-bottom: 28px;

			>* {
				line-height: 28px;
			}
		}

		.person-card,
		.cards4 {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			>* {
				margin-bottom: 16px;

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
			line-height: 64px;
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
			padding-bottom: 0;

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.title2 {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.img {
				margin: 8px auto;
				margin-bottom: 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 20px
			}

			.conf7-msg,
			.conf8-msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 10px
			}

			.cards {
				display: block;

				.card {
					margin: 0;
					padding: 0;
					font-size: 14px;
					align-items: center;
					margin-bottom: 28px;

					img {
						width: 48px;
					}

					.item-tit {
						font-size: 16px;
						margin: 0;
					}

					.item-tit {
						font-size: 16px;
						line-height: 24px;
						margin: 8px auto;
					}

					.item-txt {
						width: auto;
					}

					.card-txt {
						margin: 0;
						font-size: 14px;
						line-height: 22px;
					}
				}

				.card2 {
					font-size: 14px;
					width: auto;
					text-align: center;
					margin-bottom: 28px;

					.item-num {
						font-size: 32px;

						line-height: 48px;

						&::after {
							content: '';
							display: block;
							width: 70px;
							height: 2px;
							margin: 0 auto;
							background-color: #E30214;
						}
					}

					.item-tit {
						font-size: 16px;
						line-height: 24px;
						margin: 8px auto;
					}
				}
			}

			.cards2 {
				// display: block;
				padding: 0;

				.conf4-img {
					width: 120px;
					height: auto;
				}

				.item-tip {
					width: 220px;
					font-size: 14px;
					align-items: center;
				}
			}

			.cards3 {
				display: block;
				margin-top: 20px;

				.card3 {
					width: 358px;
					margin-bottom: 12px;

					.item-tit {
						color: #4C4143;
						height: 36px;
						padding: 8px 0;
						border-radius: 0;
						border-bottom: 2px solid #E30214;
						background-color: #e3021500;
					}

					.item-txt {
						width: 358px;
						margin: 4px 0;
						font-size: 14px;
						line-height: 22px;
					}
				}
			}

			.person-card {
				img {
					width: 168px;
					margin-bottom: 28px;
				}
			}

			.cards4 {
				display: block;

				img {
					width: 358px;
					margin-bottom: 12px;
				}
			}
		}
	}
}
</style>