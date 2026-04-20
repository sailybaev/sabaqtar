'use client'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import BottomNav from './components/BottomNav'
import {
	Home,
	BookOpen,
	Search,
	Languages,
	Library,
	FileText,
	Gamepad2,
	Monitor,
	TrendingUp,
	Zap,
	Star
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const categories = [
	{
		label: 'Қазақ тілі',
		icon: BookOpen,
		href: '/classes/kazakh-5a',
		color: '#497fff'
	},
	{
		label: 'Ағылшын тілі',
		icon: Languages,
		href: '/classes/english',
		color: '#22c55e'
	},
	{
		label: 'Оқулықтар ресурсы',
		icon: Library,
		href: '/textbooks',
		color: '#f59e0b'
	},
	{
		label: 'Негізгі ережелер',
		icon: FileText,
		href: '/classes/kazakh-5a/syn-esim',
		color: '#ec4899'
	},
	{ label: 'Ойындар', icon: Gamepad2, href: '/games', color: '#8b5cf6' },
	{
		label: 'Слайдтар',
		icon: Monitor,
		href: '/classes/kazakh-5a/syn-esim',
		color: '#06b6d4'
	}
]

export default function HomePage() {
	const [query, setQuery] = useState('')

	const filtered = categories.filter(c =>
		c.label.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<div className='bg-white flex flex-col lg:flex-row lg:h-[982px] lg:w-[1512px] min-h-screen'>
			<Sidebar activePage='home' />

			<div className='flex flex-col flex-1 lg:h-[982px] lg:w-[1256px] overflow-y-auto'>
				<TopBar breadcrumb='Басты бет' BreadcrumbIcon={Home} />

				<div className='flex flex-col items-center px-4 lg:px-10 pt-6 lg:pt-10 pb-24 lg:pb-10 gap-6 lg:gap-8 w-full'>
					{/* Search */}
					<div className='flex items-center w-full lg:w-[792px] relative shrink-0'>
						<Search
							size={18}
							className='absolute left-4 text-black opacity-30 pointer-events-none'
							strokeWidth={2}
						/>
						<input
							type='text'
							value={query}
							onChange={e => setQuery(e.target.value)}
							placeholder='Іздеу...'
							className='bg-[#f4f3f3] flex-1 w-full pl-10 pr-4 py-3 rounded-[8px] text-[16px] lg:text-[20px] font-normal text-black outline-none placeholder:opacity-30'
						/>
					</div>

					<div className='flex flex-col gap-4 lg:gap-6 w-full lg:w-[792px]'>
						<div className='flex flex-col gap-3'>
							<p className='text-[14px] font-medium text-black tracking-[-0.0476px]'>
								Санаттар
							</p>
							<div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
								{filtered.length > 0 ? (
									filtered.map(({ label, icon: Icon, href, color }) => (
										<Link key={label} href={href}>
											<div className='flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-3 rounded-[12px] border border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.18)] hover:bg-[#fafafa] transition-colors cursor-pointer'>
												<div
													className='w-10 h-10 lg:w-14 lg:h-14 rounded-[10px] lg:rounded-[12px] flex items-center justify-center shrink-0'
													style={{ backgroundColor: `${color}18` }}
												>
													<Icon size={22} strokeWidth={1.5} style={{ color }} />
												</div>
												<p className='text-[13px] lg:text-[14px] font-medium text-[#1a1a1a] tracking-[-0.04px] leading-tight'>
													{label}
												</p>
											</div>
										</Link>
									))
								) : (
									<p className='text-[14px] text-[#7c7c7c] col-span-2 lg:col-span-3'>
										Ештеңе табылмады
									</p>
								)}
							</div>
						</div>

						{/* Bento grid */}
						{!query && (
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full'>
								{/* Tip block */}
								<div className='sm:col-span-1 lg:col-span-2 rounded-[14px] border border-[rgba(73,127,255,0.2)] bg-[rgba(73,127,255,0.04)] p-5 flex flex-col gap-3'>
									<div className='flex items-center gap-2'>
										<Zap size={15} className='text-[#497fff]' strokeWidth={2} />
										<p className='text-[13px] font-semibold text-[#497fff]'>
											Кеңес
										</p>
									</div>
									<p className='text-[13px] text-[#3a3a3a] leading-relaxed'>
										Ойындар бөлімінде{' '}
										<span className='font-semibold'>
											17 интерактивті тапсырма
										</span>{' '}
										бар. Сабақта белсендіру үшін Wordwall ойындарын
										пайдаланыңыз.
									</p>
									<Link href='/games'>
										<span className='text-[12px] font-medium text-[#497fff] hover:underline'>
											Ойындарға өту →
										</span>
									</Link>
								</div>

								{/* Quote block */}
								<div className='sm:col-span-1 lg:col-span-2 rounded-[14px] border border-[rgba(0,0,0,0.07)] bg-[#fffbf0] p-5 flex flex-col gap-3'>
									<div className='flex items-center gap-2'>
										<Star
											size={15}
											className='text-[#f59e0b]'
											strokeWidth={2}
										/>
										<p className='text-[13px] font-semibold text-[#b45309]'>
											Quote of the day
										</p>
									</div>
									<p className='text-[13px] text-[#3a3a3a] leading-relaxed italic'>
										«Адам баласын адам баласынан асыл ететін нәрсе — білім мен
										еңбек. Білімсіз еңбек — жемісі аз, еңбексіз білім — пайдасы
										жоқ.»
									</p>
									<p className='text-[11px] text-[#a0a0a0]'>
										— Абай Құнанбайұлы
									</p>
								</div>

								{/* Progress block */}
								<div className='col-span-1 sm:col-span-2 lg:col-span-4 rounded-[14px] border border-[rgba(0,0,0,0.07)] bg-[#fafafa] p-5 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8'>
									<div className='flex items-center gap-2 shrink-0'>
										<TrendingUp
											size={16}
											className='text-[#22c55e]'
											strokeWidth={2}
										/>
										<p className='text-[13px] font-semibold text-[#1a1a1a]'>
											Материалдар толықтығы
										</p>
									</div>
									<div className='flex flex-col lg:flex-row gap-3 lg:gap-8 w-full'>
										{[
											{ label: 'Қазақ тілі', pct: 80, color: '#497fff' },
											{ label: 'Ағылшын тілі', pct: 60, color: '#22c55e' },
											{ label: 'Ойындар', pct: 100, color: '#8b5cf6' }
										].map(({ label, pct, color }) => (
											<div key={label} className='flex flex-col gap-1.5 flex-1'>
												<div className='flex items-center justify-between'>
													<p className='text-[12px] text-[#5b5b5b]'>{label}</p>
													<p className='text-[12px] font-medium text-[#1a1a1a]'>
														{pct}%
													</p>
												</div>
												<div className='h-1.5 rounded-full bg-[rgba(0,0,0,0.07)] overflow-hidden'>
													<div
														className='h-full rounded-full'
														style={{ width: `${pct}%`, backgroundColor: color }}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<BottomNav />
		</div>
	)
}
