type AdminPlaceholderPanelProps = {
  title: string;
  description: string;
};

export function AdminPlaceholderPanel({ title, description }: AdminPlaceholderPanelProps) {
  return (
    <section className="grarf-admin__placeholder" aria-labelledby="grarf-admin-placeholder-title">
      <header className="grarf-admin__module-header">
        <h2 id="grarf-admin-placeholder-title" className="grarf-admin__module-title">
          {title}
        </h2>
        <p className="grarf-admin__module-description">{description}</p>
      </header>
      <div className="grarf-admin__placeholder-body">
        <p className="grarf-admin__placeholder-notice">This feature has not yet been implemented.</p>
      </div>
    </section>
  );
}
