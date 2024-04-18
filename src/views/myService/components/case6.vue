<template>
	<div class="qa-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span>返回</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">驻场人事</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_6_1.png" alt="">
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
			<li class="msg" v-for="(item, index) in pageInfo.conf3.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf4.msg" :key="index">{{ item }}</li>
		</div>
	</div>
</template>

<script setup lang='ts'>
import {onMounted,ref,reactive,onUnmounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const pageInfo = {
	conf1: {
		title: '什么是驻场人事',
		msg: [
			'驻场人事服务指的是在企业内部设立办公室或工作场所的专业人力资源（HR）专家或团队，与企业管理层和员工紧密合作，提供广泛的人力资源支持，解决与员工和组织相关的各种问题。此类服务通常由外部独立的专业人力资源咨询公司或服务提供商提供。'
		]
	},
	conf2: {
		title: '企业通常需要外部公司提供驻场人事服务的原因包括',
		msg: [
			'1.  知识经验： Csuite拥有丰富的人力资源专业知识和经验，能够为企业提供全面的人力资源支持。我们的专业团队熟悉最佳实践、法规和行业趋势，能够帮助解决各种人力资源难题。',
			'2. 成本效益： Csuite通常能够提供定制服务，根据企业需求灵活调整成本。这有助于企业节省人力和财力资源，并避免雇佣全职人力资源员工带来的成本负担。',
			'3. 临时需求： 有时，企业可能只在特定时期或项目中需要人力资源支持，而不需要全职员工。Csuite可提供按需服务，满足这些短期或基于项目的需求。',
			'4. 提高效率：CSUITE提供的人力资源团队通常能够更迅速地应对问题和挑战，因为我们专注于人力资源服务，没有内部政治或流程限制。这有助于提高工作效率。',
			'5. 独立客观：我们提供的专业人力资源团队通常能够在企业外部提供独立客观的意见，不受内部政治和偏见的影响。这有助于更好地处理员工问题和决策。',
			'6. 灵活多样：我们的人力资源专业团队通常拥有更丰富的资源和多样性，能够适应各种规模和行业的企业需求。',
			'7. 专业领域：我们提供的人力资源服务可能专注于特定领域，如员工福利、绩效管理、招聘等，为企业提供精细化支持。',
			'总结来说，作为外部公司提供驻场人事服务，能够为企业提供专业、经济、灵活的人力资源支持，帮助解决各种人力资源难题，使企业能够更专注于核心业务。'
		]
	},
	conf3: {
		title: '驻场人事服务通常包括以下职责和活动',
		msg: [
			'1. 招聘支持：从发布招聘信息、筛选候选人到安排面试，驻场人事为公司的招聘需求提供全方位的支持。',
			'2. 培训发展：设计并实施员工培训计划，帮助员工提升技能和知识水平。',
			'3. 绩效管理：协助建立绩效考核流程，跟踪并管理员工的绩效表现。',
			'4. 员工关系：解决员工间的纷争，处理员工投诉，促进积极的员工关系。',
			'5. 薪酬福利：管理薪酬和福利计划，确保其市场竞争力。',
			'6. 法律合规：确保公司的雇佣实践符合相关法律法规，降低法律风险。',
			'7. 政策程序：协助制定、更新和实施公司的人力资源政策和程序。',
			'8. 员工沟通：帮助建立有效的员工沟通策略，确保员工了解公司政策和变化。',
			'驻场人事服务的优势在于提供个性化的实时支持，能够更好地了解公司文化和需求，以更好地满足员工和管理层的要求。这有助于提高员工满意度，减少人力资源问题，提升组织绩效。'
		]
	},
	conf4: {
		title: '离任和转型',
		msg: [
			'1. 人员优化项目',
			'2. 培训课程：七彩职涯探索之旅',
			'3. 培训课程：离职简历准备和面试辅导',
			'4. 离职教练陪伴'
		]
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
			margin-bottom: 20px;
			padding-bottom: 0;

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 12px;
			}
		}
	}
}
</style>
