<template>
	<div class="detail-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer" >
					<ArrowLeftBold />
				</el-icon>
				<span>返回</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">专业人才评测</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="msg" v-for="(item, index) in conf1" :key="index">{{ item }}</li>
		</div>
		<li class="h12 wow animate__fadeInUp"></li>

		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_2.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<div class="msg" v-for="(item, index) in conf2" :key="index">
				<li v-for="(t, idx) in item" :key="idx">{{ t }}</li>
			</div>
		</div>
		<!-- <li class="h24"></li> -->
		<div class="head-name wow animate__fadeInUp">评估工具-<br />Everything Disc@报告</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_3.png" alt="">
		<div class="head-name2 wow animate__fadeInUp">DisC®可以帮助我们</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_4.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">实战案例-测评助力人才甄选</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_5.png" alt="">
		<div class="head-name wow animate__fadeInUp">评估工具-<br />职业锚测评报告</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_6.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">为何“职业错”? 职业价值观</li>
			<li class="msg">指当一个人不得不做出选择的时候，他无论如何都不会放弃的职业中的那种至关重要的东西</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_6_2.png" alt="">
		<div class="head-name wow animate__fadeInUp">理念和方法</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">建设方法论</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_7.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="msg">
				我们认为可持续发展是一个旅程，企业要获得可持续成功，首先制定策略和目标，在赋能管理和执行者必要的工具和知识的同时教练的陪伴有助于他们释放领导力潜能，打造高绩效团队，推动组织成功。
			</li>
			<li class="msg">
				打造可持续发展组织，并让组织中的每个个体得到可持续提升
			</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">服务和交代? 职业价值观</li>
			<li class="msg mt8">
				我们为客户提供可持续发展的战略的解码、组织转型、文化重塑、领导力发展和员工敬业度等的咨询服务解决方案
			</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_8.png" alt="">

	</div>
</template>

<script setup lang='ts'>
import { onMounted,ref,reactive,onUnmounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const conf1 = [
	'使用人才测评工具可以帮助企业更科学、有效地选择和管理人才，提高招聘的质量和成功率，同时也有助于员工的职业发展和企业的长期成功,具体优势比如： 客观性和一致性： 人才测评工具通过标准化的评估指标和标准，可以提供客观的、一致的评价，减少了主观偏见的可能性。这有助于公平地评估所有候选人，提高了招聘过程的透明度和公正性。',
	'准确性和预测性：人才测评工具经过科学设计和验证，可以更准确地预测候选人在特定工作岗位上的表现。通过测评结果，企业可以更好地了解候选人的能力、技能、性格特点和适应性，从而做出更明智的雇佣决策。',
	'节省时间和成本：传统的面试和简历筛选过程可能会耗费大量时间和人力资源。人才测评工具可以帮助企业在早期筛选阶段更快速地识别出具备潜力的候选人，从而减少不必要的面试和筛选流程，节省时间和成本。',
	'多维度评估：人才测评工具通常涵盖多个维度，包括认知能力、人格特点、沟通能力等，可以提供更全面、多角度的候选人评估。这有助于发现适应不同工作环境和团队的人才。',
	'个性化匹配：人才测评工具可以根据企业的具体需求和工作岗位要求进行定制，从而实现更精准的人才匹配。这有助于找到最适合的候选人，提高员工的工作满意度和绩效。',
	'发现潜力和发展：人才测评工具不仅可以用于招聘，还可以用于发现内部员工的潜力和发展需求。通过评估员工的能力和发展领域，企业可以制定更有针对性的培训和晋升计划，提高员工的职业发展机会。',
	'入职教练陪伴可以缩短磨合期到产出期'
];
const conf2 = [
	['专业资质：',
		'- 拥有夏威夷大学工商管理硕士学位，获得富士通亚洲奖学金；',
		'- 拥有台湾大学工商管理学士学位，台湾交通大学管理信息系统硕士学位',
		'- 经过相应认证的高管培训教练、心理咨询师、DISC和MBTI从业者，以及Enneagram和系统星座工具的使用者。',],
	[
		'相关经验：',
		'- 为谷歌、ASML、戴尔、美国运通、英国石油、埃森哲等跨国公司的50多名高管提供了在线辅导，总时长超过500小时。超过90%的高管给出了高度评价，甚至认为这对他们的职业生涯产生了重要影响。在一年内成为了最高级别的职业发展教练（Premier Fellow）。',
		'- 作为公司转型计划的一部分，为一家全球知名的ODM公司的3名高管提供了辅导，提升了他们的领导能力和整体表现。在此过程中取得了显著的成效，因此该公司将计划从3个月延长到5个月。',
		'- 为一家香港龙头企业的保险子公司进行了深入的高层团队效能评估，并与25名高管进行了一对一的反馈和评估。同时解决了高级管理层之间的冲突，为他们重新安排了职位和责任。',
		'- 组织了1-3阶段的战略和转型研讨会，吸引了超过200名中国公司的高管参加。会后与他们进行了一对一的辅导。',
		'- 带领来自各行各业的20多位董事长参加了为期一年的个人发现之旅，其中包括小组讨论和一对一辅导的环节。'
	]
]
const goBack = () => {
	router.go(-1)
	// router.push('/service')
}
</script>
<style lang='scss' scoped>
.detail-container {
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

	.img {
		margin: 40px auto;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.title {
			font-size: 28px;
			line-height: 32px;
			font-weight: 500;
		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 28px;
		}
	}

	.head-name {
		font-size: 48px;
		width: 854px;
		margin: 48px auto;
		padding-top: 60px;
		text-align: center;
		line-height: 60px;
		font-weight: 500;
	}

	.head-name2 {
		font-size: 48px;
		margin: 48px auto;
		text-align: center;
		font-weight: 500;
	}
}

@media (max-width: 576px) {
	.detail-container {
		position: relative;
		width: 358px;
		margin: 0 auto;

		.head {
			display: flex;
			align-items: center;
			font-size: 24px;
			line-height: 40px;
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
			width: 358px;
			margin: 12px auto;
		}

		.conf-info {
			width: auto;

			.title {
				font-size: 20px;
				margin-top: 16px;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 24px;
			}
		}

		.head-name {
			width: 358px;
			font-size: 20px;
			line-height: 28px;
			margin: 0;
			padding: 32px 0;
		}

		.head-name2 {
			font-size: 20px;
			margin: 32px auto;
		}
	}
}
</style>
