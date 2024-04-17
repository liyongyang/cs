<template>
	<div>
		<div class="banner">
			<div v-if="isSmallSize" class="img animate__animated animate__fadeInUp">
				<li class="name">我们的服务</li>
				<img w-full src="@/assets/myService/banner-s-1.png" alt="" class="">
				<div class="info animate__animated animate__fadeInDown">
					<li class="title">猎头服务</li>
					<li class="msg">作为一家现代招聘服务企业，CSUITE EXECUTIVE旨在针对如今挑战重重的中国市场环境提出解决方案</li>
				</div>
			</div>
			<div v-else class="img">
				<img w-full src="@/assets/myService/banner.png" alt="" class="">
				<div class="info animate__animated animate__fadeInDown">
					<li class="title">猎头服务</li>
					<li class="msg">作为一家现代招聘服务企业，CSUITE EXECUTIVE旨在针对如今挑战重重的中国市场环境提出解决方案</li>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="box1 wow animate__fadeInUp">
				<li class="title text-8">覆盖的行业</li>
				<li class="msg">为了助力客户及候选人取得长期成功，我们依托丰富的行业经验，横跨精专领域招聘更适合的中高端人才</li>
			</div>
			<div class="box2 wow animate__fadeInUp">
				<div class="card" v-for="(item, index) in cardList" :key="index" @mouseover="activeVector = index"
					@mouseleave="activeVector = -1">
					<img
						:src="activeVector === index ? `/myService/icons/icon_act` + (index + 1) + `.png` : `/myService/icons/icon` + (index + 1) + `.png`"
						alt="icon" class="icon">
					<li class="card-name">{{ item }}</li>
				</div>
			</div>
			<div class="box1 wow animate__fadeInUp">
				<li class="title text-8">招聘流程和时间表</li>
				<li class="msg">招聘流程和时间表可能因不同企业、行业和职位而有所不同，但通常包括以下五个阶段</li>
			</div>
			<div class="bg1 wow animate__fadeInUp">
				<!-- <div class="box1"></div> -->
				<img class="left-img" src="@/assets/myService/img.png" alt="">
				<div class="btns">
					<div class="btn-items" :style="'margin-top:'+processMarginTop+'px'">
						<div class="btn-item" v-for="(item, index) in steps" :key="index" @mouseenter="toggleProcess(index,true)"
						@mouseleave="toggleProcess(index,false)" >
							<div class="title">
								<li>
									<span class="line"></span>
									<span>{{ item.name }}</span>
								</li>
								<li class="step">Step-0{{index+1}}</li>
							</div>
							<img class="btn-bg" src="/myService/step-bg.png" alt="">
							<div v-for="(t, index) in item.msg" :key="index">
								<li class="txt animate__animated animate__fadeInUp">{{ index + 1 }} {{ t }}</li>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="bg2 wow animate__fadeInUp">
				<li class="title">如何甄选人才</li>
				<div class="card" v-for="(item, index) in List" :key="index" @mouseenter="toggleHover(true)"
					@mouseleave="toggleHover(false)" @click="toCase1(index+1)">
					<div class="left">
						<li class="flex items-center">
							<span class="line"></span>
							<span class="tit">{{ item.title }}</span>
						</li>
						<li class="txt">{{ item.txt }}</li>
					</div>
					<img class="right" :src="item.img" alt="">
				</div>
			</div>
			<div class="bg3 wow animate__fadeInUp">
				<li class="title">高管招聘</li>
				<img class="img" src="@/assets/myService/banner2.png" alt="">
				<div class="card">
					<div class="item" @click="toDetail('case2')" v-for="(item, index) in list2" :key="index">
						<li class="name">
							<span class="line"></span>
							<span class="tit">{{ item.name }}</span>
						</li>
						<li class="txt">{{ item.txt }}</li>
					</div>
				</div>
			</div>
			<div class="bg4 wow animate__fadeInUp">
				<li class="title">人才盘点</li>
				<div class="card">
					<div class="item" v-for="(item, index) in list3" :key="index">
						<div>
							<li class="name">
								<span class="line"></span>
								<span class="tit">{{ item.name }}</span>
							</li>
							<li class="txt">{{ item.txt }}</li>
						</div>
						<li class="more" @click="toDetail('case3')">了解更多 </li>
					</div>
				</div>
				<video controls class="img" :poster="`/video/map.jpg`">
					<source src="/video/map.mp4" type="video/mp4">
				</video>
			</div>
			<div class="bg5 wow animate__fadeInUp">
				<li class="title">专业人才测评</li>
				<div class="content">
					<div class="btns">
						<img v-if="isSmallSize" class="img5" src="@/assets/myService/img5.png" alt="">
						<div class="item" v-for="(item, index) in list3" :key="index">
							<div class="left">
								<li class="name">
									<span class="line"></span>
									<span class="tit">{{ item.name }}</span>
								</li>
								<li class="txt">{{ item.txt }}</li>
							</div>
							<li class="more" @click="toDetail('case4')">了解更多 ></li>
						</div>
					</div>
					<img v-if="!isSmallSize" class="img5" src="@/assets/myService/img5.png" alt="">
				</div>
			</div>
			<div class="bg5 wow animate__fadeInUp">
				<li class="title">市场资讯服务</li>
				<div class="content">
					<img class="img5" src="@/assets/myService/img6.png" alt="">
					<div class="info5">
						<div>
							<li class="name5">研亚咨询</li>
							<li class="txt5-1">致力于更好的支持合作伙伴的业务成长和持续发展</li>
							<li class="txt5-2">
								研亚咨询致力于通过深度、定制化的市场研究服务，帮助客户洞察技术发展趋势、发现新的业务机会、制定差异化的竞争策略、探寻产业链上合作伙伴，进一步为客户战略制定提供关键决策信息，从而实现业务的可持续增长研亚咨询在性能材料与特种化学品、新能源汽车、半导体/显示/电子、光伏、精密仪器等领域，系统研究与经验积累超过15年；服务于上述领域的全球领先企业，包括：万华、3M、赢创、亨斯迈、汉高、西门子、丰田、电装、日立化成、英飞凌、东丽、住友化学等
							</li>
						</div>
						<li class="more5" @click="toDetail('case7')">了解更多 ></li>
					</div>
				</div>
			</div>
			<div class="bg6 wow animate__fadeInUp">
				<li class="title">职业教练</li>
				<!-- <img class="img5" src="@/assets/myService/banner3.png" alt="" @click="toDetail('case5')"> -->
				<div class="detail" @click="toDetail('case5')">
					<img src="@/assets/myService/Frame182.png" alt="">
					<div class="inner">
						<div class="question">什么是高管教练？</div>
						<div class="desc">⾼管教练通过⼀个结构性、伙伴性的陪伴过程，帮助管理者实现⼼智模式和领导⾏为的双重改变和提升，更好地应对业务挑战。</div>
						<div class="more">了解详情</div>
					</div>
				</div>
			</div>
			<div class="bg6 wow animate__fadeInUp">
				<li class="title">驻场人事</li>
				<!-- <img class="img5" src="@/assets/myService/banner4.png" alt="" @click="toDetail('case6')"> -->
				<div class="detail" @click="toDetail('case6')">
					<img src="@/assets/myService/Frame509.png" alt="">
					<div class="inner">
						<div class="question">什么是驻场人事</div>
						<div class="desc">驻场人事服务指的是在企业内部设立办公室或工作场所的专业人力资源（HR）专家或团队，与企业管理层和员工紧密合作，提供广泛的人力资源支持，解决与员工和组织相关的各种问题。此类服务通常由外部独立的专业人力资源咨询公司或服务提供商提供。</div>
						<div class="more">查看详情</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const { t } = useI18n()

import img2_1 from '@/assets/myService/img2-1.png';
import img2_2 from '@/assets/myService/img2-2.png';
import img2_3 from '@/assets/myService/img2-3.png';

const isSmallSize = ref(window.innerWidth < 576)

const timer = ref()
const activeVector = ref(-1)
const cardList = [
	'财务会计',
	'数字营销',
	'行政文秘',
	'教育培训',
	'金融服务',
	'快销零售',
	'人力资源',
	'IT互联网',
	'法务律师',
	'生命科学',
	'智造研发',
	'市场营销',
	'运营',
	'供应链和采购',
]
const steps = [
	{
		name: '定义',
		msg: [
			'了解客户业务',
			'建立招聘需求',
			'统一寻访方向及成功条件',
			'统一寻访策略及时间框架'
		]
	},
	{
		name: '研究',
		msg: [
			'明确目标行业及公司',
			'开展积极有效的候选人筛选，实践搜索策略',
			'横向纵向调查市场',
			'定位并吸引候选人，行为面试潜在优秀候选人'
		]
	},
	{
		name: '交付',
		msg: [
			'依据成功标准做出评估',
			'向客户发回市场反馈，列出候选人职位及公司',
			'与客户确定下一轮候选人',
			'提供入围候选人名单报告及客户面试 （第2-4周）'
		]
	},
	{
		name: '完成',
		msg: [
			'学历检查及360度背景调查',
			'完成最终候选人的心理测',
			'协商条款、条件及录用功条件',
			'与客户及候选人进行就业安置服务 （第4-6周）'
		]
	},
	{
		name: '定义',
		msg: [
			'离职辅导及离职期进展跟进',
			'入职体检等入职前准备跟进',
			'到岗确认及反馈了解',
			'启动收款并跟进进程',
			'人选保证期跟进，持续更进候选人入职情况'
		]
	},
]

const List = [
	{
		title: '甄选的渠道',
		txt: 'CSUITE通常使用多种渠道来甄选候选人，通常会结合多种渠道，以确保我们找到最合适的候选人来满足客户的需求。不同的渠道有不同的优点和缺点，因此灵活运用是关键。',
		img: img2_1
	},
	{
		title: '甄选的过程',
		txt: 'Csuite 在候选人甄选渠道方面表现出色， 我们在特定领域的深度专业化让我们在该领域内脱颖而出。并建立广泛的专业网络，积极参与行业活动、协会会议和社交媒体，以扩大专业网络。与潜在候选人建立关系，使客户能够第一时间能够更容易接触到高质量的候选人。',
		img: img2_2
	},
	{
		title: '我们的服务成就你的业务',
		txt: 'CSUITE通常使用多种渠道来甄选候选人，通常会结合多种渠道，以确保我们找到最合适的候选人来满足客户的需求。不同的渠道有不同的优点和缺点，因此灵活运用是关键。',
		img: img2_3
	}
]

const list2 = [
	{
		name: '管理者画像与关键岗位画像的区别',
		txt: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。'
	},
	{
		name: '人与组织匹配逻辑',
		txt: '不同发展成熟度的组织需要对应的领导风格和领导特质'
	}
]
const list3 = [
	{
		name: '什么是人才地图',
		txt: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。'
	},
	{
		name: '什么是人才方法论',
		txt: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。'
	},
	{
		name: '我们应该mapping什么',
		txt: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。'
	},
	{
		name: '如何绘制人才地图',
		txt: '能够成为高绩效的管理员，不仅取决于其与岗位的匹配程度，还受其与组织匹配程度的影响。'
	},
]
const isHover = ref(false);

const toggleHover = (data: boolean) => {
	console.log('first---------')
	isHover.value = data;
}
// case1 返回之后滚动的位置
let topArr = [2000,2380,2710]
onMounted(() => {
	// timer.value = setInterval(() => {
	// 	active.value < 5 ? active.value++ : active.value = 0
	// 	console.log(active.value)
	// }, 2000)
	// case1 返回之后滚动到之前位置
	if (route.query && route.query.step) {
		window.scrollTo({
			top: topArr[Number(route.query.step)-1],
		})
	}
});
// case1通过step参数来确定，case1页面点击返回时，回到哪个位置
const toCase1 = (index:number) =>{
	router.push({
		path: '/service/case1',
		query: { step: index}
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
const toDetail = (idx: string) => {
	router.push({
		path: `/service/${idx}`
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
// 处理招聘流程和时间表动画
const processMarginTop = ref(0)
let processTimer:any = null
let documentWidth = document.documentElement.clientWidth
const toggleProcess = (index:number,type:boolean) =>{
	if (documentWidth >576 && index === 4) {
		if (type) {
			clearInterval(processTimer)
			processTimer = setTimeout(() =>{
				processMarginTop.value = -72
			},500)
		} else {
			processMarginTop.value = 0
		}
	} else {
		processMarginTop.value = 0
	}
}
onUnmounted(() => {
	timer.value = null
	processTimer = null
})


</script>

<style lang='scss' scoped>
.banner {
	padding-bottom: 35px;

	.name {
		text-align: center;
		font-size: 24px;
		line-height: 64px;
		font-weight: 500;
	}

	.img {
		height: 100%;
		// width: 100%;
	}

	.info {
		color: #231C1E;
		position: absolute;
		top: 38%;
		left: 50px;


		.title {
			font-size: 48px;
			font-weight: 500;
			line-height: 64px;
		}

		.msg {
			width: 400px;
			margin-top: 16px;
			font-size: 20px;
			font-weight: 400;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
		}
	}
}

.content {
	width: 1312px;
	height: 100%;
	margin: 0 auto;

	.box1 {
		padding-top: 64px;

		.title {
			height: 64px;
			font-size: 48px;
			font-weight: 500;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;
		}

		.msg {
			width: auto;
			font-size: 20px;
			font-weight: 400;
			line-height: 26px;
			letter-spacing: 0em;
			text-align: left;
		}
	}

	.box2 {
		padding: 64px 0;
		display: flex;
		flex-wrap: wrap;

		.card {
			flex: 0 0 auto;
			width: 246px;
			height: 197px;
			border: 1px solid #B0A7A7;
			padding: 32px;
			margin: 8px;
			padding-top: 40px;
			border-radius: 12px;
			font-size: 28px;
			line-height: 36px;
			align-items: center;
			text-align: center;
			transition: all 1s;
			color: #fff;

			.icon {
				width: 56px;
				height: 56px;
				margin-top: 35px;
			}

			.card-name {
				display: none;
			}

			&:hover {
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

				.icon {
					width: 56px;
					height: 56px;
					margin-top: 0;
				}

				.card-name {
					display: block;
					margin-top: 10px;
				}
			}
		}
	}

	.bg1 {
		width: auto;
		height: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-between;
		border-radius: 12px;
		background-repeat: no-repeat center;
		background-size: 100% 100%;

		.left-img {
			position: relative;
			width: 656px;
			height: 640px;
			border-radius: 12px;
		}

		.btns {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 640px;
			overflow: hidden;
			// overflow: scroll;
			.btn-items {
				transition: all 0.5s ease-in-out;
			}
			.btn-item {
				position: relative;
				flex: 0 0 auto;
				display: block;
				cursor: pointer;
				width: 640px;
				height: 98px;
				font-size: 24px;
				font-weight: 500;
				border-radius: 8px;
				border: #B0A7A7 1px solid;
				transition: all 0.35s;
				margin-bottom: 16px;
				padding: 0 32px;
				line-height: 90px;
				overflow: hidden;
				.btn-bg {
					display: none;
				}

				.txt {
					display: none;
					opacity: 0;
				}

				&:hover {
					color: #fff;
					height: 256px;
					padding: 24px 32px;
					line-height: 24px;
					background-image: url('/myService/step-bg.png');
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					transition: all 0.5s ease-in-out;

					.btn-bg {
						position: absolute;
						right: 0;
						display: block;
					}

					.title {
						padding-bottom: 24px;

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 20px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.txt {
						display: block;
						font-size: 20px;
						line-height: 32px;
						font-weight: 300;
					}
				}

				.title {
					display: flex;
					justify-content: space-between;
					text-align: center;
					align-items: center;

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: var(--active-color);
					}

					.step {
						font-size: 20px;
						font-weight: 300;
					}
				}

				.txt {
					display: none;
					opacity: 1;
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;

					&:hover {
						display: block;
					}
				}
			}
		}
	}

	.bg2 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			padding: 64px 0;
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			cursor: pointer;
			width: auto;
			height: 317px;
			font-size: 24px;
			font-weight: 500;
			border-radius: 8px;
			border: #B0A7A7 1px solid;
			transition: all 0.35s;
			margin-bottom: 16px;
			padding: 24px 32px;
			line-height: 120px;

			&:hover {
				color: #fff;
				border: 1px solid #E30214;
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

				.left {

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}
			}


			.left {
				width: 800px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}

				.tit {
					font-size: 28px;
					font-weight: 500;
					letter-spacing: 0em;
					text-align: left;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}
			}

			.right {
				width: auto;
				height: 235px;
				margin-top: 24px;
			}
		}
	}

	.bg3 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			cursor: pointer;

			.item {
				flex: 0 0 auto;
				width: 648px;
				height: 320px;
				padding: 40px 40px 40px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				border: 1px solid #B0A7A7;

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 64px;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}
			}
		}
	}

	.bg4 {
		height: 100%;
		padding-bottom: 40px;
		video{
			width: 100%;
			object-fit: cover;
		}
		
		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.item {
				flex: 0 0 auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 648px;
				height: 283px;
				padding: 40px 40px 40px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				border: 1px solid #B0A7A7;

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 20px;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}

				.more {
					cursor: pointer;
					height: 50px;
					line-height: 50px;
				}

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}
			}
		}

		.img {
			border-radius: 12px;
			border: 1px solid #B0A7A7;
		}
	}

	.bg5 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.content {
			display: flex;
			justify-content: space-between;

			.btns {
				width: 608px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					display: flex;
					justify-content: space-between;
					width: 608px;
					height: 155px;
					font-size: 20px;
					line-height: 26px;
					border-bottom: 1px solid #B0A7A7;

					&:hover {
						.more {
							color: var(--active-color);
						}
					}

					.left {
						width: 400px;
						text-wrap: wrap;
						word-wrap: break-word;
						white-space: pre-wrap;
					}

					.name {
						font-size: 28px;
						font-weight: 500;
						line-height: 36px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 20px;
						line-height: 26px;
						font-weight: 300;
					}

					.more {
						cursor: pointer;
						text-align: right;
						width: 160px;
						height: 50px;
						line-height: 50px;
						margin-top: 40px;
						padding-right: 24px;
					}
				}
			}

			.info5 {
				width: 576px;
				height: 620px;
				display: flex;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				flex-direction: column;
				border-bottom: #B0A7A7 1px solid;
				justify-content: space-between;

				.name5 {
					font-size: 28px;
					line-height: 64px;
				}

				.txt5-1 {
					font-size: 20px;
					line-height: 56px;
				}

				.txt5-2 {
					font-size: 18px;
					line-height: 28px;
					font-weight: 400;
				}

				.more5 {
					cursor: pointer;
					font-size: 20px;
					height: 50px;
					line-height: 50px;

					&:hover {
						color: #E30214;
					}
				}
			}

			.img5 {
				height: 640px;
				width: auto;
				border-radius: 12px;
			}
		}

	}

	.bg6 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		// .img5 {
		// 	cursor: pointer;
		// }
		.detail{
			position: relative;
			cursor: pointer;
			color:  #FFF;
			font-weight: 400;
			.inner{
				position: absolute;
				top:205px;
				left:64px;
				width: 448px;
				text-align: justify;
			}
			.question{
				font-size: 28px;
			}
			.desc{
				font-size: 20px;
				margin-top:12px;
				white-space: wrap;
			}
			.more{
				background-color: 	#fff;
				border-radius: 8px;
				height: 56px;
				width:160px;
				line-height:56px;
				text-align:center;
				margin-top: 64px;
				font-size: 16px;
				color:#231C1E;
				transition: all 0.5s linear;
				&:hover{
					font-size:20px
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.banner {
		width: 358px;
		margin: 0 auto;
		padding-bottom: 32px;

		.img {
			border-radius: 12px;
		}

		.info {
			color: #fff;
			position: absolute;
			top: 50%;
			left: 20px;

			.title {
				font-size: 18px;
				font-weight: 500;
				line-height: 24px;
			}

			.msg {
				width: 240px;
				margin-top: 12px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				letter-spacing: 0em;
				text-align: left;
			}
		}
	}

	.content {
		width: 358px;
		height: 100%;
		margin: 0 auto;

		.box1 {
			padding-top: 0;

			.title {
				height: 32px;
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.msg {
				width: auto;
				font-size: 12px;
				font-weight: 400;
				line-height: 16px;
				letter-spacing: 0em;
				text-align: left;
			}
		}

		.box2 {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 32px;

			.card {
				width: 80px;
				height: 78px;
				border: 1px solid #B0A7A7;
				padding: 12px;
				border-radius: 12px;
				font-size: 14px;
				line-height: 18px;
				transition: all 0.5s;
				margin: 4px;

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.icon {
						width: 24px;
						height: 25px;
						margin-top: 0;
					}

					.card-name {
						display: block;
						margin-top: 0px;
					}
				}

				.icon {
					width: 24px;
					height: 25px;
					margin-top: 12px;
				}
			}
		}

		.bg1 {
			width: auto;
			height: 100%;
			display: block;
			border-radius: 12px;
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 12px 0;
			margin-bottom: 16px;

			.left-img {
				position: relative;
				width: 358px;
				height: 340px;
				border-radius: 12px;
			}

			.btns {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
				overflow: hidden;

				.btn-item {
					flex: 0 0 auto;
					display: block;
					cursor: pointer;
					width: 358px;
					height: 42px;
					font-size: 14px;
					font-weight: 500;
					border-radius: 8px;
					border: #B0A7A7 1px solid;
					transition: all 0.35s;
					margin-bottom: 16px;
					padding: 0 12px;
					line-height: 42px;

					&:hover {
						color: #fff;
						height: 100%;
						padding: 12px;
						line-height: 24px;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.btn-bg {
							width: 80px;
							position: absolute;
							right: 12px;
							display: block;
						}

						.title {
							padding-bottom: 8px;

							.line {
								margin-right: 8px;
								display: inline-block;
								width: 3px;
								height: 12px;
								border-radius: 8px;
								background-color: #fff;
							}
						}

						.txt {
							display: block;
							font-size: 14px;
							line-height: 18px;
							font-weight: 300;
						}
					}

					.title {
						display: flex;
						justify-content: space-between;
						text-align: center;
						align-items: center;

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: var(--active-color);
						}

						.step {
							font-size: 12px;
							font-weight: 300;
						}
					}

					.txt {
						display: none;
						font-size: 20px;
						line-height: 32px;
						font-weight: 300;

						&:hover {
							display: block;
						}
					}
				}
			}
		}

		.bg2 {
			height: 100%;
			padding-bottom: 16px;

			.title {
				padding: 12px 0;
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.card {
				display: flex;
				justify-content: space-between;
				align-items: center;
				cursor: pointer;
				width: auto;
				height: auto;
				font-size: 14px;
				font-weight: 500;
				border-radius: 8px;
				border: #B0A7A7 1px solid;
				transition: all 0.35s;
				margin-bottom: 12px;
				padding: 12px;
				line-height: 18px;

				&:hover {
					color: #fff;
					border: 1px solid #E30214;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.left {

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}
				}


				.left {
					width: 173px;
					line-height: 28px;

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}

					.tit {
						padding: 0;
						font-size: 14px;
						font-weight: 500;
						letter-spacing: 0em;
						text-align: left;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
					}
				}

				.right {
					width: auto;
					height: 94px;
					margin-top: 12px;
				}
			}
		}

		.bg3 {
			height: 100%;
			padding-bottom: 16px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 16px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.img {
				width: 358px;
				height: 100%;
			}

			.card {
				display: block;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					width: auto;
					height: 100%;
					padding: 12px;
					margin: 8px 0;
					border-radius: 8px;
					font-size: 12px;
					line-height: 16px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border: 1px solid #B0A7A7;

					.name {
						font-size: 14px;
						font-weight: 500;
						line-height: 18px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
					}

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}
				}
			}
		}

		.bg4 {
			height: 100%;
			padding-bottom: 32px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 16px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.card {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 358px;
					height: 100%;
					padding: 12px;
					margin: 0;
					font-size: 12px;
					margin-bottom: 12px;
					border-radius: 8px;
					line-height: 16px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border: 1px solid #B0A7A7;

					.name {
						font-size: 14px;
						font-weight: 500;
						line-height: 18px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
						margin-bottom: 12px;
					}

					.more {
						cursor: pointer;
						height: 16px;
						line-height: 16px;
					}

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}
				}
			}

			.img {
				width: 358px;
			}
		}

		.bg5 {
			height: 100%;
			padding-bottom: 32px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 12px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.content {
				display: block;

				.btns {
					width: auto;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						flex: 0 0 auto;
						display: block;
						width: 358px;
						height: 100%;
						font-size: 12px;
						line-height: 16px;
						margin-bottom: 12px;
						border-radius: 12px;
						padding: 12px;
						border: 1px solid #B0A7A7;

						&:hover {
							.more {
								color: var(--active-color);
							}
						}

						.left {
							width: auto;
							text-wrap: wrap;
							word-wrap: break-word;
							white-space: pre-wrap;
						}

						.name {
							font-size: 14px;
							font-weight: 500;
							line-height: 16px;
							margin-bottom: 12px;
						}

						.txt {
							font-size: 12px;
							line-height: 16px;
							font-weight: 300;
						}

						.more {
							cursor: pointer;
							text-align: left;
							width: auto;
							height: 14px;
							line-height: 14px;
							margin-top: 12px;
							padding-right: 24px;
						}
					}
				}

				.info5 {
					width: 358px;
					height: auto;
					display: flex;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					flex-direction: column;
					border-bottom: #B0A7A7 1px solid;
					justify-content: space-between;

					.name5 {
						font-size: 14px;
						line-height: 32px;
					}

					.txt5-1 {
						font-size: 12px;
						line-height: 28px;
					}

					.txt5-2 {
						font-size: 12px;
						line-height: 16px;
						font-weight: 400;
					}

					.more5 {
						cursor: pointer;
						font-size: 12px;
						height: 36px;
						line-height: 36px;

						&:hover {
							color: #E30214;
						}
					}
				}

				.img5 {
					height: auto;
					width: 358px;
					border-radius: 12px;
					margin-bottom: 12px;
				}
			}

		}

		.bg6 {
			height: 100%;
			padding-bottom: 18px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 12px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.img5 {
				width: 358px;
			}
		}
	}
}
</style>
