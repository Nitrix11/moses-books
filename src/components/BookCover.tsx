type Props = { title: string; author?: string; coverUrl?: string | null; className?: string }

export function BookCover({ title, author = 'Moses', coverUrl, className = '' }: Props) {
  if (coverUrl) {
    return <img src={coverUrl} alt={`${title} by ${author}`} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div className={`relative h-full w-full gradient-cover overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 8px)' }} />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(201,151,58,0.9)' }}>PathwayToWholeness</div>
        <div>
          <h3 className="font-serif text-xl leading-tight text-primary-foreground line-clamp-4">{title}</h3>
          <div className="mt-3 h-px w-12 bg-gold" />
          <div className="mt-2 text-[11px] uppercase tracking-widest" style={{ color: 'rgba(201,151,58,0.9)' }}>{author}</div>
        </div>
      </div>
    </div>
  )
}
