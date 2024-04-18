<template>
	<div class="qa-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span>返回</span>
			</div>
			
			<li class="flex-initial w-full text-center wow animate__fadeInUp">如何甄选人才</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<li class="msg">{{ pageInfo.conf1.msg }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf1.tips" :key="index">
				{{ index + 1 }}. {{ item }}
			</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_2.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf2.msg" :key="index">
				{{ item }}
			</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_3.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<li class="msg">{{ pageInfo.conf3.msg }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf3.tips" :key="index">
				{{ index + 1 }}. {{ item }}
			</li>
		</div>
	</div>
</template>

<script setup lang='ts'>
import {onMounted,ref,reactive,onUnmounted } from 'vue';
import { useRouter, useRoute} from "vue-router";
const router = useRouter();
const route = useRoute();
const qaList = [
	{
		q: '为什么要加入CSUITE?',
		a: '在Csuite，我们相信每一个人。我们专注于寻找他们，了解他们，建立连接并帮助他们成长。在Csuite，我们释放人类潜能的力量。如果您对招聘工作感兴趣，或者您只是准备改变赛道，尝试新的道路并释放自己的潜力 - 那么您来对地方了。今天就和我们谈谈，准备好和我们一起翱翔吧。我们提供基于绩效的透明、更快速的职业发展结构。这不是我们临时做的事情。当我们雇用你时，我们正在寻找潜在的新兴领导者，这些人不仅可以成长为明天的领导者，更可以成长为明天的明星。'
	}
]
const pageInfo = {
	conf1: {
		title: '甄选的渠道',
		msg: 'Csuite通常采用多种渠道来筛选候选人，通过综合利用多种渠道，以确保我们能够找到最合适的候选人，满足客户的需求。我们深知不同渠道具有不同的优缺点，因此灵活性是我们工作的关键。我们广泛使用以下渠道进行招聘：',
		tips: [
			'充分利用企业专业数据库进行搜索。',
			'运用社交媒体平台来搜索和联系潜在候选人。',
			'利用在线搜索技巧和工具来扩大我们的候选人搜索范围。',
			'在职业网站和招聘平台发布职位需求，并主动联系适合的候选人。',
			'积极参与专业协会和行业活动，与相关人员建立联系。',
			'通过推荐和引荐来找到潜在的高质量候选人。',
			'利用人才地图和其他创新渠道来寻找更多适合的候选人。'
		]
	},
	conf2: {
		title: '甄选的过程',
		msg: ['Csuite在候选人甄选方面表现出色，秉持着在特定领域的深厚专业功底，使我们在行业中脱颖而出。我们建立了广泛的专业网络，并积极参与行业活动、协会会议和社交媒体，以拓展我们的专业网络。通过与潜在候选人建立关系，我们能够让客户更轻松地在第一时间接触到高质量的候选人。',
			'同时，我们运用最先进的数据分析和技术工具，更好地了解市场和候选人的趋势。这使得我们能够更准确地定位和筛选候选人。然而，我们不仅仅关注候选人的数量，更注重他们的质量。我们提供个性化的服务，与客户建立亲密的工作关系，并深入了解他们的企业文化和工作要求，以确保候选人在多个方面与客户的文化和需求相契合。'
		]
	},
	conf3: {
		title: '我们的服务成就你的业务',
		msg: '通过为企业甄选最佳人选，猎头公司可以积极影响企业的成功。成功的人选选择能够为企业提供所需的人才，帮助提高生产力、业绩和业务成就。而与企业价值观高度契合的员工更有可能积极参与并为企业成功做出贡献。',
		tips: [
			'合适的候选人引入企业后，能够积极为企业的发展和业绩做出贡献。',
			'匹配度高的候选人更容易融入企业文化，加速提高生产效率。他们往往能够更快地实现业务目标，提高绩效。',
			'通过猎头公司找到的候选人通常具备相关的专业知识和经验，对于解决企业的具体需求和挑战至关重要。',
			'招募不合适的员工会导致成本增加、生产力损失和人员流失。猎头公司的专业甄选流程有助于降低这些风险，并确保招聘的员工符合要求。',
			'企业自行招聘员工可能消耗大量时间和资源，而猎头公司可以帮助企业加快招聘流程，使企业能够更专注于核心业务。',
		]
	},
}
// 头部返回滚动
let backIconRef=ref<HTMLElement | null>(null)
let backStyle= reactive({
	style:{
		position:'fixed',
	}
})
const backScroll = ()=>{
	let backIconHeight =backIconRef.value!.getBoundingClientRect().top
	// 获取滚动条的高度
	let scrollTop = document.documentElement.scrollTop
		if (scrollTop>0) {
			backStyle.style = {
				position:'fixed',
				top:backIconHeight+'px'
			}
		} else {
			backStyle.style = {
				position:'relative',
				top:'0'
			}
		}
}
onMounted(() => { 
	// window.addEventListener('scroll', backScroll);
});
onUnmounted(() => {	
	// window.removeEventListener('scroll', backScroll)
})
const goBack = () => {
	// router.go(-1)
	console.log(route.query?.step)
	router.push({
		path: `/service`,
		query: { step:  route.query?.step||''}
	})
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
			height:80px;
			width: 80px;
			// border-radius: 40px;
			background: #fff;
			// padding-top:23px;
			text-align: center;
			transform: scale(1);
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

	.img {
		margin-top: 40px;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
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
		}
	}
}
</style>
