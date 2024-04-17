<template>
	<div class="qa-container">
		<div class="head flex">
			<el-icon class="icon-back cursor-pointer" @click="goBack">
				<ArrowLeftBold />
			</el-icon>
			<li class="flex-initial w-full text-center animate__animated animate__fadeInDown">人才地图</li>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf1.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg" v-for="(t, index) in item.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg">{{ pageInfo.conf2.info }}</li>
			<img class="img" src="@/assets/myService/detail_3_1.png" alt="">
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf2.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg">{{ item.msg }}</li>
				</div>
			</div>
			<li class="msg">{{ pageInfo.conf2.text }}</li>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<div class="cards">
				<div class="card2" v-for="(item, index) in pageInfo.conf3.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg" v-for="(t, index) in item.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<li class="msg">{{ pageInfo.conf4.info }}</li>
			<div v-for="(item, index) in pageInfo.conf4.items" :key="index">
				<li class="title">{{ index + 1 }} {{ item.name }}</li>
				<div class="cards" v-if="index < 1">
					<div class="card padding2">
						<li class="item-name">{{ item.cards[0].name }}</li>
						<li class="item-msg">{{ item.cards[0].msg }}</li>
					</div>
					<div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[1].name }}</li>
							<li class="item-msg">{{ item.cards[1].msg }}</li>
						</div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[2].name }}</li>
							<li class="item-msg">{{ item.cards[2].msg }}</li>
						</div>
					</div>
				</div>
				<div class="cards" v-else>
					<div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[0].name }}</li>
							<li class="item-msg">{{ item.cards[0].msg }}</li>
						</div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[2].name }}</li>
							<li class="item-msg">{{ item.cards[2].msg }}</li>
						</div>
					</div>
					<div class="card padding2">
						<li class="item-name">{{ item.cards[1].name }}</li>
						<li class="item-msg">{{ item.cards[1].msg }}</li>
					</div>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<div class="box-flex">
				<img class="img2" src="@/assets/myService/detail_3_2.png" alt="">
				<div class="info-right">
					<li class="item-msg" v-for="(t, index) in pageInfo.conf5.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<li class="item-msg" v-for="(t, index) in pageInfo.conf6.msg" :key="index">{{ t }}</li>
		</div>
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6_more[0].name }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf6_more[0].cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg2" v-for="(t, index) in item.msg" :key="index">{{ index + 1 }}. {{ t }}</li>
				</div>
			</div>
			<li class="title">{{ pageInfo.conf6_more[1].name }}</li>
			<li class="item-msg">{{ pageInfo.conf6_more[1].msg }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_3_3.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6_more[2].name }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_3_4.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6_more[2].msg }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_3_5.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6_more[3].name }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_3_6.png" alt="">
		<div class="conf-info">
			<li class="title">{{ pageInfo.conf6_more[3].msg }}</li>
		</div>
		<img class="img" src="@/assets/myService/detail_3_7.png" alt="">
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const pageInfo = {
	conf1: {
		title: '什么是人才地图',
		cards: [
			{
				name: '对标岗位人才地图',
				tip: '（行业中所有公司的目标岗位）',
				msg: [
					'有时候研究对象不是目标公司全部的岗位，而是市场上被关注的热点岗位，也是招聘中存在困难的岗位，甚至是招不到人的一些岗位，这种情况下我们按照目标岗位来划分。比如特定的岗位: 经营的某个岗位、市场的某个岗位、总监的岗位或者经理的岗位都可以。',
					'这一类目标岗位人才群体的规模在行业有多少人地理位置如何分布、这些人员的资历和背景、工作职责和绩效状况、薪酬水平、跳槽意愿甚至包括对公司是否愿意加入、看法等。都可以放在人才地图的内容里面。'
				]
			},
			{
				name: '对标公司及对标岗位人才地图',
				tip: '（目标公司中的目标岗位）',
				msg: [
					'目标公司部门布局，业务布局，对标岗位的人才资历背景、工作职责、KPI绩效考评的状况、薪酬水平、和是否有离职意愿。有了这样的一个地图，就像作战时的有了一张部署精准，结构缜密的战图一样，我们对整个行业的人才做到心中有数，了如指掌。',
					'未来的竞争说的是产品的竞争，但产品它是会改变的无论是渠道、创新，它背后其实都是人才在驱动，所以从根本上来说，我们就要从源头上把握人才Mapping就显得越来越重要了。'
				]
			}
		]
	},
	conf2: {
		title: '什么是Mapping?',
		info: '相对而言，猎头公司对人才地图会更加熟悉。我先来为大家做个解读：什么是人才地图？人才地图的内容是哪些？',
		cards: [
			{
				name: '内部-人才盘点',
				msg: 'OD通过对内部人才盘点，助力于组织发展及搭建培训体系；'
			},
			{
				name: '外部-人才地图',
				msg: '招聘HR通过系统了解并掌握外部人才市场的关键信息，绘制对标行业、公司的人才地图，助力于人才招募。'
			}
		],
		text: '今天主要是分享招聘中关于外部人才市场的人才地图。主要的含义是系统性地去了解、绘制、掌握外部的关键人才的分布、地理位置和公司、资历和背景、薪酬信息、动机等关键信息。'
	},
	conf3: {
		title: '人才地图有三种分类：',
		cards: [
			{
				name: '对标公司人才地图 （目标公司的所有岗位）',
				msg: ['展现形式目标公司的组织架构，担任重要岗位的人才和资历背景、主要的工作职责、KPI绩效考评的状况、以及薪酬水平和是否有离职意愿等等。']
			},
			{
				name: '对标岗位人才地图 （行业中所有公司的目标岗位）',
				msg: ['有时候研究对象不是目标公司全部的岗位，而是市场上被关注的热点岗位，也是招聘中存在困难的岗位，甚至是招不到人的一些岗位，这种情况下我们按照目标岗位来划分。比如特定的岗位：经营的某个岗位、市场的某个岗位、总监的岗位或者经理的岗位都可以。']
			},
			{
				name: '对标岗位人才地图 （行业中所有公司的目标岗位）',
				msg: [
					'有时候研究对象不是目标公司全部的岗位，而是市场上被关注的热点岗位，也是招聘中存在困难的岗位，甚至是招不到人的一些岗位，这种情况下我们按照目标岗位来划分。比如特定的岗位：经营的某个岗位、市场的某个岗位、总监的岗位或者经理的岗位都可以。',
					'这一类目标岗位人才群体的规模在行业有多少人、地理位置如何分布、这些人员的资历和背景、工作职责和绩效状况、薪酬水平、跳槽意愿甚至包括对公司是否愿意加入、看法等。都可以放在人才地图的内容里面。',
					'未来的竞争说的是产品的竞争，但产品它是会改变的，无论是渠道、创新，它背后其实都是人才在驱动，所以从根本上来说，我们就要从源头上把握人才，Mapping就显得越来越重要了。'
				]
			}
		]
	},
	conf4: {
		title: '如何构建人才地图',
		info: '因为人才地图改变了人力资源管理的定位，人力资源上升到人力资本和人才经营的高度。所以人才地图的构建也要站在更高的高度去搭建才可以。',
		items: [
			{
				name: '梳理企业战略需求、组织体系与人才体系',
				cards: [
					{
						name: 'A',
						msg: '企业的发展规划和为实现战略规划的职能与人力资源需求（人力资源管理与人才）。有人说，哪里来的这种需求呀？这种问法也对。因为从来也没有人会直接告诉你这种需求，需要在企业战略规划或战略目标的前提下进行分解，首先是职能需求分解，即为了达到战略目标需要什么样的职能支撑；其次是人才分解，即为了满足支撑战略目标的职能需求，需要匹配什么样的人才和多少数量的人才。'
					},
					{
						name: 'B',
						msg: '支撑战略需求的人才图谱以及与之匹配的人力资本投入与收益分析。如何做到人力资源投入产出的最大化。然后反过来，检讨未来人才需求梳理的合理性。'
					},
					{
						name: 'C',
						msg: '为了满足未来人才战略，需要的组织形式与胜任标准。'
					}
				],
			},
			{
				name: '梳理企业的组织体系',
				cards: [
					{
						name: 'A',
						msg: '当前的组织体系，包括组织架构、职级体系、薪级体系、职级通道、岗位编制管理等等。'
					},
					{
						name: 'B',
						msg: '基于未来战略实现的组织演变模式和与之匹配的组织架构形式。这里我想特别强调一下，组织架构是根据目标达成和运营模式的要求分解出来的，而不是直接画图画出来的。'
					},
					{
						name: 'C',
						msg: '基于不同阶段组织形势下，与企业职级体系匹配的人才胜任需求标准。'
					}
				],
			},
			{
				name: '梳理企业的人才体系',
				cards: [
					{
						name: 'A',
						msg: '根据企业战略需求与组织需求，确定人才需求的轻重缓急，并定义企业的“人才”标准。'
					},
					{
						name: 'B',
						msg: '对现有人才进行盘点，制定盘点表格并形成盘点矩阵和分析报告。对应现有人才的现状确定其未来的岗位匹配及其个人职业提升与发展的轻重缓急及其通道。同时建立起企业人才流动的常规和非常规通道。'
					},
					{
						name: 'C',
						msg: '根据人力资源（含人才）盘点报告和分析，找出现有人才与未来人才需求的差距与现有人才的提升潜力。同时拟定补足差距的途径。'
					}
				],
			}
		]
	},
	conf5: {
		title: '我们到底该Mapping什么？',
		msg: [
			'那我们做Mapping，实际上我们Mapping什么。我们的目标是什么，无非就是这三个：公司、岗位、人。',
			'我们要分析说，我们的目标公司有哪些，比如说同行业竞争对手肯定是，还有不同行业的相同岗位，给我们行业做服务、做培训、做咨询的，也会有我们需要的人才。所以目标公司我们要首先锁定，我们到底要Mapping哪些，哪些公司我们要进行地毯式的搜索。',
			'公司定位之后，我们就要定位岗位，你这个公司有哪些岗位是我们关心的，一个部门有多少个这样的岗位，我们也要摸清楚。最后是看人，看这个人的什么，这就涉及到我们后面的内容了。',
			'作为一个人讲，首先我们要知道他在哪个组织，他所在组织的组织架构、概况、创始人、股东、主要的核心团队、他的部门搭建、部门内的配置然后到这个人他的背景资料、学历、年龄等基本资料；还有职业发展、做过哪些公司、这些公司跟我们市场的业务有没有交集；接下来是成就事件——这也很关键，因为人，我们看背景资料，看职业发展，并不能判断这个人做得好还是不好——我们只能知道这个人是这么客观存在的，区别其实就是在成就事件。'
		]
	},
	conf6: {
		title: '如何绘制Mapping？',
		msg: [
			'人才地图的呈现方式有很多，EXCEL、word、PPT，还有最近很流行的思维导图都可以，大家根据自己的操作习惯来就好。接下来我们就可以做准备工作了：明确对标行业、公司、岗位、明确具体操作的时间节点，明确人员配置与分工，制定操作计划就可以开始了。人才地图中绘制中的内容，可以包含行业信息（行业发展历程、市场容量、产品分类、发展现状、行业痛点、行业标杆）、公司信息（公司发展历程、公司产品、业务分布、组织架构、风云人物、商业行为、近期大事件）、人才信息（管理层姓名、管理层背景、招聘岗位情况）等等。',
			'人才地图绘制完成之后，人才地图是死的，人是活的，人在不断的变换，所以我们的地图也要不断的更新才行。怎么去更新呢，大家还是要像前面做mapping一样，不停的反复做，周期性的做都可以。我们可以关注行业的专业媒体，专注行业的动态，新产品出现、高管离职等等报道。还有可以经常参加行业活动，这样可以得到更多的行业信息；还可以用行业的名义组织一些论坛，邀请一些目标群体的人来做下小型行业知识交流会等等，类似这种活动都可以重新认识行业中的大咖大牛们；还有就是自办活动，公司自己组织一些行业内的论坛，跟媒体合作，媒体做报道，邀请大咖们，或者做一些行业人才状况的调查，调查完了之后报告共享等等。',
			'通过以上方式都可以发现我们人才地图中的一些变化，借以维护和更新。'
		]
	},
	conf6_more: [
		{
			name: '1.锁定目标公司',
			cards: [
				{
					name: '目标公司常见属性',
					msg: [
						'直接竞争对手',
						'与公司产品的相近 / 相似、有可能在未来参与竞争的公司',
						'与公司产品相关联的公司',
						'人员规模、市场体量相近的公司',
						'营销渠道及方式、运营管理模式相近的公司',
						'同行业中“万金油“企业'
					]
				},
				{
					name: '目标公司目录来源',
					msg: [
						'根据目标公司常见属性自主分析寻找',
						'搜集我公司参与的各大产品展会的企业名单',
						'记录参加我公司面试的候选人过往的工作单位、通过面试人选进一步了解业务相近的公司名称',
						'交一些行业内的朋友并向其进行咨询'
					]
				}
			]
		},
		{
			name: '2.确定任务画像',
			msg: '人才画像是以职位说明书为基础，对标目标公司，找出能胜任该职位要求的职位原型。'
		},
		{
			name: '3.多个渠道搜索',
			msg: '渠道使用技巧'
		},
		{
			name: '4.整理信息拼图',
			msg: '信息拼图的基本原则'
		}
	]
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

		.box-flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
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

				.item-msg {
					padding-bottom: 24px;
				}

				.item-msg2 {
					line-height: 24px;
				}

				.item-name2 {
					padding-bottom: 8px;
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

			.card2 {
				flex: 0 0 auto;
				width: 1312px;
				display: block;
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

				.item-msg {
					padding-bottom: 24px;
				}
			}

			.padding2 {
				padding: 0 32px;
				padding-top: 40px;
				padding-bottom: 24px;
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

		.info-right {
			width: 594px;

			.item-msg {
				font-size: 16px;
				line-height: 24px;
				padding-bottom: 28px;
			}
		}

		.item-msg {
			font-size: 18px;
			line-height: 24px;
			padding-bottom: 28px;
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
			margin-top: 0;
		}

		.conf-info {
			width: auto;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			padding-bottom: 0;

			.title {
				font-size: 18px;
				line-height: 24px;
				font-weight: 500;
				margin: 12px 0;
			}

			.item-msg {
				font-size: 14px;
				padding-bottom: 24px;
			}

			.msg,
			.tip {
				font-size: 14px;
				line-height: 18px;
				margin-bottom: 18px;
			}

			.img {
				width: 358px;
			}

			.box-flex {
				display: block;
				align-items: center;
			}

			.img2 {
				width: 358px;
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

					.item-msg2 {
						font-size: 14px;
						line-height: 24px;
					}

					.item-name2 {
						padding-bottom: 8px;
					}

					.tips-cont {
						display: flex;

						.item-tips {
							margin: 0 16px;
							font-size: 16px;
							line-height: 28px;
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

				.card2 {
					flex: 0 0 auto;
					width: 358px;
					display: block;
					margin-bottom: 10px;
					border-radius: 8px;
					padding: 12px 18px;
					border: 1px solid #B0A7A7;

					.item-name {
						font-size: 16px;
						font-weight: 500;
						padding-bottom: 12px;

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

					.item-msg {
						font-size: 14px;
						padding-bottom: 12px;
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

			.info-right {
				width: 358px;

				.item-msg {
					font-size: 14px;
					line-height: 20px;
					padding-bottom: 18px;
				}
			}
		}
	}
}
</style>